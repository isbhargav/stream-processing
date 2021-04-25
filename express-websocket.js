const express = require('express')
const WebSocket = require('ws')
const url = require('url')

const app = express()


const wss1 = new WebSocket.Server({ noServer: true });
const wss2 = new WebSocket.Server({ noServer: true });

wss1.on('connection', function connection(ws) {
  // ...
    ws.end('WSS1')
});

wss2.on('connection', function connection(ws) {
  // ...
    ws.end('WSS1')
});

// Recive Upgrade
app.on('upgrade', function upgrade(request, socket, head) {

    console.log(request)
    const pathname = url.parse(request.url).pathname;


    if (pathname === '/foo') {
        wss1.handleUpgrade(request, socket, head, function done(ws) {
            wss1.emit('connection', ws, request);
        });
    } else if (pathname === '/bar') {
        wss2.handleUpgrade(request, socket, head, function done(ws) {
            wss2.emit('connection', ws, request);
        });
    } else {
        socket.destroy();
    }
});

app.get("/foo",(req,res)=>{ res.end("Hello WOrkd!!") })
app.listen(8080,()=>console.log("Started!!"));

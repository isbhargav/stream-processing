const WebSocket = require("ws");

// instanciate websocket server
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws, req) {
  const ip = req.socket.remoteAddress;
  console.log(ip);
  console.log(ws);

  // Convert Websocket to stream
  const duplex = WebSocket.createWebSocketStream(ws, { encoding: "utf8" });
  duplex.pipe(process.stdout);
  duplex.pipe(duplex);
  // ws.pipe(process.stdout)
});

// TO connect use this  in java Script
// const socket = new WebSocket("ws://localhost:8080");

// Other Usefull Packages

// duplexify - if you want to do somestuff before writing
// end-of-stream - handels end of stream cases *very usefull for handeling edge cases
// pump - alternative to .pipe to handel error from any streams
// pumpify - similar to pup but also returns duplex stream

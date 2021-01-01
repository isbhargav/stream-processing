// Client -> ProxyServer -> 


const net = require('net')

net.createServer((stream) => {
    const serverStream = net.connect(5000, 'localhost');
    stream.pipe(serverStream).pipe(stream)
}).listen(50001)
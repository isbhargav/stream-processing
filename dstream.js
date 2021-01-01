// Duplex Stream is input + ouput stream where
// input is decoupled from ouput like telephone
// A.pipe()..........pipe(A)

const net = require('net')

net.createServer((stream) => { 
stream.pipe(stream)
}).listen(5000)
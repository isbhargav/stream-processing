const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    console.log(req)
    // const imgStream = fs.createReadStream('./Specs.jpg');
    // res.setHeader('content-type',' image/jpeg')
    // imgStream.pipe(res)

    const videoStream = fs.createReadStream('./sample.mp4');
    res.setHeader('content-type','video/mp4')
    videoStream.pipe(res)

}).listen(5000)
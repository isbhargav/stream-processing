//  Zlib core streams
// * zlib.createGzip(opts) - compress with gzip
// * zlib.createGunzip(opts) - uncompress with gzip
// * zlib.createDeflate(opts) - compress with defalte
// * zlib.createDeflateRaw(opts) - compress with deflate raw
// * zlib.createInflate(opts) - uncomporess with defalte
// * zlib.createInflateRaw(opts) - uncomporess with defalte raw
// * zlib.createUnzip(opts) - uncompress gzip and deflate

const fs = require('fs')
const http = require('http')
const { createGzip}= require('zlib')
http.createServer((req, res) => {
    const imgStream = fs.createReadStream('./Specs.jpg');
    res.setHeader('content-encoding', 'gzip')
    res.setHeader('content-type',' image/jpeg')
    imgStream.pipe(createGzip()).pipe(res)

    
    // const videoStream = fs.createReadStream('./sample.mp4');
    // res.setHeader('content-encoding', 'gzip')
    // res.setHeader('content-type', 'video/mp4')
    
    // videoStream.pipe(createGzip()).pipe(res)

}).listen(5000)
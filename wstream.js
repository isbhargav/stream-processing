
// Writable Streams are sink of Data.

// Any  stream you can write to (writable, transform, duplex) has these methods


// .write(data)
// .end()
// .end(data)
// .on('finish',)
// (...).pipe(stream)


const fs = require('fs')

const stream = fs.createWriteStream('cool.txt')

stream.once('finish', () => console.log('Done!!'))
stream.write('hi\n')
stream.write('hello\n')
stream.write('hey\n')
stream.write('hola\n')
stream.end()
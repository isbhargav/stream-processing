// Transform streams are readable + Writeable where 
// readable -> transform -> writable
// It has all the methods of input and output streams


const { Transform } = require('stream')

const upperCase = new Transform({
    transform: (chunk, enc, next) => {
        next(null,chunk.toString().toUpperCase())
    }
})

process.stdin.pipe(upperCase).pipe(process.stdout)


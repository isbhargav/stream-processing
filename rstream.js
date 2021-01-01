// Readable streams are source of data

// Methods on readable streams
// .pipe()
// .on('end',)

// You dont need to call these often 

// .read()
// .on('readable', () => { })

// you can let a module or `pipe()` take care of calling those


const fs = require('fs')
const { argv } = require('process')
const stream = fs.createReadStream(argv[2] || argv[1])

stream.pipe(process.stdout)

// Read streams can oprate in 2 modes 
// 1. Paused Mode (Defautl) - push only when called (automatic backpressure )
// 2. Flow Mode  - continuesly pushing data
//      - Turn Flow mode with stream.resume()
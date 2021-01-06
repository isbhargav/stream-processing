// Readable streams are source of data

// Methods on readable streams
// .pipe()
// .on('end',)

// You dont need to call these often

// .read()
// .on('readable', () => { }) //PULL BASED

// you can let a module or `pipe()` take care of calling those

const fs = require("fs");
const { argv } = require("process");
const { pipeline } = require("stream");
const stream = fs.createReadStream(argv[2] || argv[1], { encoding: "utf-8" });



// stream.pipe(process.stdout);  - OLD Way, Dont's use this as it creates memory leaks

// pipeline(stream, process.stdout, (err) => {
//   console.log(err);
// });

// Every readable stream is asynchronously iterable
async function logChunks(readable) {
  let result = "";
  for await (const chunk of readable) {
    // console.log(chunk);
    result += chunk;
  }
  return result;
}


logChunks(stream).then((result) => console.log(result));

// Read streams can oprate in 2 modes
// 1. Paused Mode (Defautl) - push only when called (automatic backpressure )
// 2. Flow Mode  - continuesly pushing data
//      - Turn Flow mode with stream.resume()

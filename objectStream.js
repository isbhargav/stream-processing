const {Transform} = require('stream')

function counter () {
  let size = 0

  return new Transform({
    objectMode: true,
      transform: (data, _, done) => {
      done(null, { length:data.length,total:size+=data.length })
    }
  })
}
function result () {

  return new Transform({
    objectMode: true,
      transform: (data, _, done) => {
          console.log({data})
          done()
    }
  })
}
process.stdin.pipe(counter()).pipe(result())
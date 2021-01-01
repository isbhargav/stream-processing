// Core streams in Nodejs

// * fs.createReadStream()
// * fs.createWriteStream()
// * process.stdin, process.stdout, process.stderr
// * ps.stdin, ps.stdout, ps.stderr  //child process
// * net.connect(), tls.connect()
// * net.createServer(),tls.createServer()
// ....

const { spawn } = require('child_process')
const ps = spawn('grep', ['potato'])
ps.stdout.pipe(process.stdout)

ps.stdin.write('Gello\n')
ps.stdin.write('gkldjsa dkslajdkla\n')
ps.stdin.write('Hello potato in\n')
ps.stdin.write('I like potatoes\n')
ps.stdin.end()

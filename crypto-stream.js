// Crypto module of nodejs

// * crypto.createCipher(algo, pwd) - transform stream to enncrypt
// * crypto.createDecipher(algo,pwd) -  transform stream to decrypt
// * crypto.createCipheriv(algo, pwd, iv) - transform stream to encrypt with iv
// * crypto.createDecipheriv(algo,pwd, iv) - transform stream to decrypt with iv

// * crypto.createHash(algo) - transform stream to create cryptographic hash
// * crypto.createHMAC(algo,key) - transform stream to create HMAC digest
// * crypto.createSign(algo) - writable stream to write message
// * crypto.Verify(algo) - writable stream to verify signature


const { createHash } = require('crypto')
const { stdout } = require('process')

process.stdin.pipe(createHash('sha512',{encoding:'hex'})).pipe(stdout)


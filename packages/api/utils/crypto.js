const { randomBytes } = require('@ethersproject/random')
const { sha256 } = require('@ethersproject/sha2')
const aesjs = require('aes-js');

class Crypto {
  constructor() {
    this.key = randomBytes(16)
  }

  encrypt( token ) {
    const tokenString = JSON.stringify(token)
    const dataBytes = aesjs.utils.utf8.toBytes(tokenString);

    // make a 16 bytes counter from the data
    const hash = sha256(dataBytes).slice(2, 34)
    const counter = aesjs.utils.hex.toBytes(hash)
    
    const aesCtr = new aesjs.ModeOfOperation.ctr(this.key, new aesjs.Counter(counter));
    const encryptedBytes = aesCtr.encrypt(dataBytes);
     
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

    return { counter: hash, data: encryptedHex }
  }

  decrypt( counter, data ) {
      const counterBytes = aesjs.utils.hex.toBytes(counter)
      const aesCtr = new aesjs.ModeOfOperation.ctr(this.key, new aesjs.Counter(counterBytes));

      const encryptedBytes = aesjs.utils.hex.toBytes(data)
      const decryptedBytes = aesCtr.decrypt(encryptedBytes);
 
      // Convert bytes back into text
      const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
      const token = JSON.parse(decryptedText)
      return token
  }
}

module.exports = new Crypto()
  
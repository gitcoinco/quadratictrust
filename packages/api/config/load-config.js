const fs = require('fs')
const path = require('path')
const os = require('os')

module.exports = () => {
  const envPath = path.join(os.homedir(), '.env.quadratic')

  if (fs.existsSync(envPath)) {
    require('dotenv').config({ path: envPath })
  } else {
    require('dotenv').config()
  }
}

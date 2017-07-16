// ROOT API

module.exports = (express, controllers) => {
  const router = express.Router()
  const v1 = require('./v1')(router, controllers)

  const versions = {
    v1: v1
  }
  return versions
}

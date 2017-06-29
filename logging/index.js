/*
    Logging router
*/

const ENV = process.env.NODE_ENV
const prod          =   'production'
const dev           =   'dev'
const logging_dev   =   require('./logging_dev.js')
const logging_prod  =   require('./logging_prod.js')

module.exports = (message, error, type) => {
  if (ENV === prod) {
    return logging_prod(message, error, type)
  } else if (ENV === dev) {
    return logging_dev(message, error, type)
  }
}

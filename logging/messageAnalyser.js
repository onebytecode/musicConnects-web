const GOOD_TYPE    =  'GOOD'
const ERROR_TYPE   =  'ERROR'
const WARN_TYPE    =  'WARN'

module.exports = (message, type) => {
  switch (type) {
    case GOOD_TYPE:
    return message.green.bgWhite
    case ERROR_TYPE:
    return message.red.bgWhite
    case WARN_TYPE:
    return message.yellow.bgWhite
  }
}

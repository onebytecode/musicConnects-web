const colors       =  require('colors')
const messageAnalyser  =  require('./messageAnalyser')

module.exports = (message, err, type) => {
  let errorMessage = ''
  if (message) errorMessage += messageAnalyser(message, type)
  if (err) errorMessage += '\n' + err
  return console.log(errorMessage);
}

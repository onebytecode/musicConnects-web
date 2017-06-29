const messageAnalyser  =  require('./messageAnalyser')

module.exports = (message, error, type) => {
  let messageString = ''
  if (message) messageString += messageAnalyser(message, type)
  return  console.log(messageString);
}

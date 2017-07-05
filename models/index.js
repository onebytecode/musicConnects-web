module.exports = () => {
  const { mongoose, autoIncrement }  =  require('../db')()

  const getBands = () => {
    return require('./band')(mongoose, autoIncrement)
  }
  const models = {
    Bands: getBands()
  }
  return models
}

module.exports = (db) => {
  const { mongoose, autoIncrement }  =  db

  const getBands = () => {
    return require('./band')(mongoose, autoIncrement)
  }
  const models = {
    Bands: getBands()
  }
  return models
}

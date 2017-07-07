module.exports = (db) => {
  const { mongoose, autoIncrement }  =  db

  const getBands = () => {
    return require('./band')(mongoose, autoIncrement)
  }
  const getArtists = () => {
    return require('./artist')(mongoose, autoIncrement)
  }
  const models = {
    Bands: getBands(),
    Artists: getArtists()
  }
  return models
}

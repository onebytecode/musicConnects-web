module.exports = (db) => {
  const { mongoose, autoIncrement }  =  db

  const getBiographies = () => {
    return require('./biography')(mongoose, autoIncrement)
  }
  const getBands = () => {
    return require('./band')(mongoose, autoIncrement)
  }
  const getArtists = () => {
    return require('./artist')(mongoose, autoIncrement)
  }
  const getUsers = () => {
    return require('./user')(mongoose, autoIncrement)
  }
  const models = {
    Biographies: getBiographies(),
    Artists: getArtists(),
    Users: getUsers(),
    Bands: getBands()
  }
  return models
}

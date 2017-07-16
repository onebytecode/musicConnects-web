module.exports = (db) => {
  const { mongoose, autoIncrement }  =  db

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
    Bands: getBands(),
    Artists: getArtists(),
    Users: getUsers()
  }
  return models
}

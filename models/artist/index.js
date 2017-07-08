module.exports = (mongoose, autoIncrement) => {
  return require('./artist_model')(mongoose, autoIncrement)
}

module.exports = () => {
  const config             = require('../config/db')
  const { url }        = config
  const mongoose       = require('mongoose')
  const autoIncrement  = require('mongoose-auto-increment')
  mongoose.Promise     = require('bluebird')
  mongoose.connect(url)

  const db = mongoose.connection;
  autoIncrement.initialize(db)
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(callback) {
      console.log("connection to db open")
  });

  const getBands = () => {
    return require('./band')(mongoose, autoIncrement)
  }
  const models = {
    Bands: getBands()
  }
  return models
}

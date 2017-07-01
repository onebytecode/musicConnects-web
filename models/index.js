module.exports = () => {
  // const MongoClient    = require('mongodb').MongoClient
  const config             = require('../config/db')
  const { url }        = config
  const mongoose       = require('mongoose')
  mongoose.Promise     = require('bluebird')
  mongoose.connect(url)

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(callback) {
      console.log("connection to db open")
  });

  const getBands = () => {
    return require('./band')(mongoose)
  }
  const models = {
    Bands: getBands()
  }
  return models
}

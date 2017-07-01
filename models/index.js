module.exports = () => {
  const MongoClient    = require('mongodb').MongoClient
  const db             = require('../config/db')
  const { url }        = db

  const getBands = () => {
    return require('./bands')(MongoClient, url)
  }
  const models = {
    Bands: getBands()
  }
  return models
}

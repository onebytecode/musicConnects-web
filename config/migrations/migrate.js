const validators       = require('../db_validators.json')
const band_validator   = validators.band
const artist_validator = validators.artst
const MongoClient      = require('mongodb').MongoClient
const db               = require('../db')
var  Promise           = require('bluebird')


MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(`ERROR :: ${err}`)
  /*
        Migrations
  */
  Promise.all([
    require('./create_bands')(band_validator, database),
    require('./create_artists')(band_validator, database)
  ])
  .then( function(result) {
    console.log(`${result}`);
    database.listCollections().toArray(function(err, collInfos) {
      if (err) return err
      collInfos.forEach((el) => {
        console.log(`Name : ${el.name}`);
      })
    })
    database.close()
  }, function(error) {
    console.log(`Error ${error}`);
    database.close()
  })

})

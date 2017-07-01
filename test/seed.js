module.exports = (models, moduleCallback) => {
  const seeds      =  require('./seeds.json')
  const { Bands }  =  models
  let Promise      =  require('bluebird')

  const loopSeed  =  (callback) => {
    Bands.insertMany(seeds.bands, (err, bands) => {
      if (err) callback(err)
      callback()
    })
  }

  const seed = () => {
    loopSeed((err) => {
      if (err) moduleCallback(err)
      moduleCallback()
    })
  }
  seed()
}

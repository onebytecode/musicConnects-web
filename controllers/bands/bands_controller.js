// BANDS CONTROLLER
const Promise  =  require('bluebird')
module.exports  =  (bands) => {
  const getBand  =  (params, callback) => {
    bands.findOne({ id: params.id }, (err, band) => {
      return callback(err, band)
    })
  }
  const createBand = (params, callback) => {
    bands(params).save((err, band) => {
      return callback(err, band)
    })
  }
  const updateBand  =  (params, callback) => {
    bands.findOneAndUpdate({ id: params.id }, params, (err, doc) => {
      return callback(err, doc)
    })
  }
  const deleteBand  =  (params, callback) => {
    bands.findOneAndRemove({ id: params.id }, (err, doc) => {
      return callback(err, doc)
    })
  }

  const methods = {
    get: getBand,
    create: createBand,
    update: updateBand,
    delete: deleteBand
  }
  return methods
}

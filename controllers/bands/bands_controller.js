// BANDS CONTROLLER
const Promise  =  require('bluebird')
const { crud_helper }  =  require('../helpers')()
module.exports  =  (bands) => {
  const getBand  =  (params, callback) => {
    return crud_helper.get(bands, params, (err, model) => {
      return callback(err, model)
    })
  }
  const createBand = (params, callback) => {
    return crud_helper.create(bands, params, (err, model) => {
      console.log(model);
      return callback(err, model)
    })
  }
  const updateBand  =  (params, callback) => {
    return crud_helper.update(bands, params, (err, model) => {
      return callback(err, model)
    })
  }
  const deleteBand  =  (params, callback) => {
    return crud_helper.delete(bands, params, (err, model) => {
      return callback(err, model)
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

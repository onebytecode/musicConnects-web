module.exports = () => {
  const get  =  (model, params, callback = () => {}) => {
    return new Promise((resolve, reject) => {
      model.findOne(params, (err, _model) => {
        callback(err, _model)
        if (err) return reject(err)
        resolve(_model)
        return
      })
    })

  }
  const create = (model, params, callback = () => {}) => {
    return new Promise((resolve, reject) => {
      model(params).save((err, _model) => {
        if (err) return reject(err)
        resolve(_model)
        return callback(err, _model)
      })
    })

  }
  const update  =  (model, params, callback) => {
    const uParams = {}
    Object.keys(params).forEach((el) => { if (el === '_id') return; uParams[el] = params[el] })
    model.findOneAndUpdate({ _id: params._id }, uParams, { new: true }, (err, doc) => {
      return callback(err, doc)
    })
  }
  const _delete  =  (model, params, callback) => {
    model.findOneAndRemove({ _id: params._id }, (err, doc) => {
      return callback(err, doc)
    })
  }
  const methods = {
    get: get,
    create: create,
    update: update,
    delete: _delete
  }
  return methods
}

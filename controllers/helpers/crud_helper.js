module.exports = () => {
  const get  =  (model, params, callback) => {
    model.findOne({ _id: params._id }, (err, _model) => {
      return callback(err, _model)
    })
  }
  const create = (model, params, callback) => {
    model(params).save((err, _model) => {
      return callback(err, _model)
    })
  }
  const update  =  (model, params, callback) => {
    model.findOneAndUpdate({ _id: params._id }, params, (err, doc) => {
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

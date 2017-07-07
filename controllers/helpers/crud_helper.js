module.exports = () => {
  const get  =  (model, params, callback) => {
    model.findOne({ id: params.id }, (err, _model) => {
      return callback(err, _model)
    })
  }
  const create = (model, params, callback) => {
    model(params).save((err, _model) => {
      return callback(err, _model)
    })
  }
  const update  =  (model, params, callback) => {
    model.findOneAndUpdate({ id: params.id }, params, (err, doc) => {
      return callback(err, doc)
    })
  }
  const _delete  =  (model, params, callback) => {
    model.findOneAndRemove({ id: params.id }, (err, doc) => {
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

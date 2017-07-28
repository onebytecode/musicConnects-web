module.exports = () => {
  const get  =  (model, params, callback = () => {}) => {
    const { mParams, mPopulate } = params
    return new Promise((resolve, reject) => {
      if (mPopulate) {
        mParams._id = mParams.id ? mParams.id : mParams._id
        model.findOne(mParams).populate(mPopulate).exec((err, _model) => {
          callback(err, _model)
          if (err) return reject(err)
          resolve(_model)
          return
        })
      } else {
        params._id = params.id ? params.id : params._id
        model.findOne(params, (err, _model) => {
          callback(err, _model)
          if (err) return reject(err)
          resolve(_model)
          return
        })
      }
    })
  }
  const create = (model, params, callback = () => {}) => {
    return new Promise((resolve, reject) => {
      model(params).save((err, _model) => {
        if (err) {
          callback(err)
          return reject(err)
        } else {
          callback(null, _model)
          return resolve(_model)
        }
      })
    })

  }
  const update  =  (model, params, callback = () => {}) => {
    params = params.mParams ? params.mParams : params
    
    return new Promise((resolve, reject) => {
      const uParams = {}
      Object.keys(params).forEach((el) => { if (el === '_id') return; uParams[el] = params[el] })
      params._id = params.id ? params.id : params._id
      model.findOne({ _id: params._id }, async (err, doc) => {
        if (err) {
          reject(err)
          return callback(err)
        }
        Object.keys(uParams).forEach((el) => { doc[el] = uParams[el] })
        doc.save()
        resolve(doc)
        return callback(null, doc)
      })
    })

  }
  const _delete  =  (model, params, callback = () => {}) => {
    return new Promise((resolve, reject) => {
      params._id = params.id ? params.id : params._id
      model.findOneAndRemove({ _id: params._id }, (err, doc) => {
        if (err) reject(err)
        callback(err, doc)
        resolve(doc)
      })
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

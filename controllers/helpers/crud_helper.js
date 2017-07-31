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
  const update  =  async (model, params, callback = () => {}) => {
    const specialBehavour = params.behavour
    params = params.mParams ? params.mParams : params
    params._id = params.id ? params.id : params._id
    const uParams = {}
    Object.keys(params).forEach((el) => { if (el === '_id') return; uParams[el] = params[el] })
    try {
      const sParams = params._id ? { _id: params._id } : params.__creator ? { __creator: params.__creator } : params
      console.log(sParams);
      const m = await model.findOne(sParams)
      Object.keys(uParams).forEach(p => { m[p] = uParams[p] })
      m.save()
      if (specialBehavour) {
        const a = specialBehavour.model
        const b = specialBehavour.params
        try {
          await update(a, b)
        } catch (err) {
          throw new Error(err)
        }
      }
      return m
    } catch (error) {
      throw new Error(error)
    }
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

// MODELS CONTROLLER

module.exports = (models, helpers) => {
  const { crud_helper }  =  helpers
  const modelNames = Object.keys(models)
  const defineModel = (name) => {
    const index = modelNames.indexOf(name)
    if (index === -1) return { error: new Error('No model with name ' + name), result: null }
    const model = models[name]
    return { error: null, result: model }
  }
  const getModel  =  async (setup, params, callback = () => {}) => {
    const { name } = setup
    const defModel = defineModel(name)
    const { error, result } = defModel
    if (error) {
      callback(error)
      return { error: error, model: null }
    }
    const _model = result
    let model, err
    try {
      model = await crud_helper.get(_model, params)
      callback(null, model)
      return { error: null, model: model }
    } catch(ex) {
      err = ex
      callback(err, null)
      return { error: err, model: null}
    }
  }
  const createModel = async (setup, params, callback = () => {}) => {
    const { name } = setup
    const defModel = defineModel(name)
    const { error, result } = defModel
    if (error) {
      callback(error)
      return { error: error, model: null }
    }
    const _model = result
    try {
      let model = await crud_helper.create(_model, params)
      callback(null, model)
      return { error: null, model: model }
    } catch (err) {
      callback(err)
      return { error: err, model: null }
    }
  }
  const updateModel  =  async (setup, params, callback = () => {}) => {
    const { name } = setup
    const defModel = defineModel(name)
    const { error, result } = defModel
    if (error) {
      callback(error)
      return { error: error, model: null }
    }
    const _model = result
    try {
      let model = await crud_helper.update(_model, params)
      callback(null, model)
      return { error: null, model: model }
    } catch(err) {
      callback(err)
      return { error: err, model: null }
    }
  }
  const deleteModel  =  async (setup, params, callback = () => {}) => {
    const { name } = setup
    const defModel = defineModel(name)
    const { error, result } = defModel
    if (error) {
      callback(error)
      return { error: error, model: null }
    }
    const _model = result
    try {
      const model = await crud_helper.delete(_model, params)
      callback(null, model)
      return { error: null, model: model }
    } catch (err) {
      callback(err)
      return { error: err, model: null }
    }
  }

  const methods = {
    get: getModel,
    create: createModel,
    update: updateModel,
    delete: deleteModel
  }
  return methods

}

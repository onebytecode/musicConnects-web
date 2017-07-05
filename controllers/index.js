// CONTROLLERS ROOT
module.exports  =  (models) => {
  // MODELS
  const { Bands }  =  models

  const controllers = {
    bands: require('./bands')(Bands)
  }
  return controllers
}

// CONTROLLERS ROOT
module.exports  =  (models) => {
  // MODELS
  const { Bands }  =  models

  const controllers = {
    bands_controller: require('./bands')(Bands)
  }
  return controllers
}

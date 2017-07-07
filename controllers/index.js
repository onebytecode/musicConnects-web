// CONTROLLERS ROOT
module.exports  =  (models) => {
  // MODELS
  const { Bands, Artists }  =  models

  const controllers = {
    bands_controller: require('./bands')(Bands),
    artists_controller: require('./artists')(Artists)
  }
  return controllers
}

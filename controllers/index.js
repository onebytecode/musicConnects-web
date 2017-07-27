// CONTROLLERS ROOT
module.exports  =  (models, secrets, links) => {
  // MODELS
  const { Bands, Artists, Users }  =  models
  const helpers         = require('./helpers')(secrets)
  const modelsController = require('./models')(models, helpers)
  const registrationsController = require('./registrations')(modelsController, helpers, links)
  const authenticationController = require('./authentications')(modelsController, helpers, links)
  const controllers = {
    registration_controller: registrationsController,
    authentication_controller: authenticationController,
    models_controller: modelsController
  }
  return controllers
}

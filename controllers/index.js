// CONTROLLERS ROOT
module.exports  =  (models, secrets, links) => {
  // MODELS
  const { Bands, Artists, Users }  =  models
  const helpers         = require('./helpers')(secrets)
  const bandsController = require('./bands')(Bands, helpers)
  const artistsController = require('./artists')(Artists, helpers)
  const usersController  =  require('./users')(Users, helpers)
  const registrationsController = require('./registrations')(usersController, helpers, links)
  const controllers = {
    bands_controller:   bandsController,
    artists_controller: artistsController,
    users_controller: usersController,
    registration_controller: registrationsController
  }
  return controllers
}

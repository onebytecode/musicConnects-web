module.exports  =  (controllers, should, expect) => {
  const { bands_controller, artists_controller, users_controller, models_controller }  =  controllers
  require('./bands_controller_tests')(bands_controller, should, expect)
  require('./artists_controller_tests')(artists_controller, should, expect)
  require('./users_controller_tests')(users_controller, should, expect)
  require('./models_controller_tests')(models_controller, should, expect)
}

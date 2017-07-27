module.exports  =  (controllers, should, expect) => {
  const { bands_controller, users_controller, models_controller }  =  controllers
  require('./models_controller_tests')(models_controller, should, expect)
}

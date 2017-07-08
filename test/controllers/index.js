module.exports  =  (controllers, should, expect) => {
  const { bands_controller, artists_controller }  =  controllers
  require('./bands_controller_tests')(bands_controller, should, expect)
  require('./artists_controller_tests')(artists_controller, should, expect)
}

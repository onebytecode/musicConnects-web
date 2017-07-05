module.exports  =  (controllers, should, expect) => {
  const { bands_controller }  =  controllers
  require('./bands_controller_tests')(bands_controller, should, expect)
}

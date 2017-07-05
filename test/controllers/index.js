module.exports  =  (controllers, should, expect) => {
  const { bands }  =  controllers
  require('./bands_controller_tests')(bands, should, expect)
}

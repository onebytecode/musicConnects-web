module.exports = (server, chai, should, expect, seed) => {
  require('./main_test')(server, chai, should, expect)
  require('./resources_test')(server, chai, should, expect)
  // require('./bands_test')(server, chai, should, expect)
}

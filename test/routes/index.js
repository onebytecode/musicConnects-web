module.exports = (server, chai, should, expect, config) => {
  const { secrets } = config
  require('./main_test')(server, chai, should, expect)
  require('./resources_test')(server, chai, should, expect)
  require('./api_test')(server, chai, should, expect, secrets)
  // require('./bands_test')(server, chai, should, expect)
}

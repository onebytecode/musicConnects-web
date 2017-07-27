//  MODELS TESTS ROOT

module.exports = (m, e, s) => {
  require('./band_model_tests')(m, e, s)
  require('./artist_model_tests')(m, e, s)
  require('./user_model_tests')(m, e, s)
}

// ROOT OF GRAPHQL TESTS

module.exports = (s, c, e, a) => {
  const bundle = { server: s, chai: c, expect: e, assert: a }
  require('./user_gql_tests')(s, c, e, a)
  require('./band_gql_tests')(bundle)
}

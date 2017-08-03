// MC MIDDLEWARE ROOT

module.exports = () => {
  const session  =  require('./session')
  const sess     =  require('./sess')
  const gql      =  require('./gql')

  const middleware = {
    sessionMiddleware: session,
    sess,
    gql
  }
  return middleware
}

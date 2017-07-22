// MC MIDDLEWARE ROOT

module.exports = () => {
  const session  =  require('./session')
  const sess     =  require('./sess')

  const middleware = {
    sessionMiddleware: session,
    sess: sess
  }
  return middleware
}

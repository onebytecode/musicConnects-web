module.exports =  (router, controllers) => {
  const commonRouter = require('./router')(router, controllers)
  const api_v1 = require('./api')(router, controllers).v1

  const routers = {
    commonRouter: commonRouter,
    api_v1: api_v1
  }
  return routers
}

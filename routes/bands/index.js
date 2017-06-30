module.exports = (request, response, app, db) => {
  console.log(`Starting ${request.path}`);
  return require('./bands_routes.js')(request, response, app)
}

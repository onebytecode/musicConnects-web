module.exports = (request, response, app, db) => {
  console.log(`Starting ${request.path}`);
  return require('./main_routes.js')(request, response, app, db)
}

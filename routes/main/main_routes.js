module.exports = function(request, response, app, db) {
const ROOT    =  app.root
const logger  =  app.logger
const route   =  request.path
/*
      GET /
*/
return response.sendFile(ROOT + '/views/index.html')

}

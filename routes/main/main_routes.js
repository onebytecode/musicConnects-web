module.exports = function(request, response, app, db) {
const ROOT    =  app.root
const logger  =  app.logger
const route   =  request.path
  /*
        GET
  */
switch(route) {
  case '/':
  console.log('/');
  response.sendFile(ROOT + '/views/index.html')
  break;
  case '/main.js.gz':
  console.log('/main.js.gz');
  response.setHeader("Content-Encoding", "gzip")
  response.sendFile(ROOT + '/public' + request._parsedUrl.pathname)
}

  /*
        CREATE
  */

}

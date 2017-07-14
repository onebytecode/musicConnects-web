module.exports = function(request, response) {
/*
      GET /
*/
return response.sendFile(request.app.root + '/views/index.html')

}

module.exports = function(app, db) {
const ROOT = app.root
  /*
        GET
  */
  app.get('/', function (req, res) {
    res.sendFile(ROOT + '/views/index.html')
  })
  app.get('/main.js', function (req, res) {
    console.log('Starting ' + req.url)
    res.sendFile(ROOT + '/public' +  req._parsedUrl.pathname)
  })
  app.get('/main.js.gz', (req, res) => {
    console.log(`Starting ${req.url}`);
    res.setHeader("Content-Encoding", "gzip")
    res.sendFile(ROOT + '/public' + req._parsedUrl.pathname)
  })

  /*
        CREATE
  */

}

module.exports = function(app, db) {

  /*
        GET
  */
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
  })
  app.get('/main.js', function (req, res) {
    console.log('Starting ' + req.url)
    res.sendFile(__dirname + '/public' +  req._parsedUrl.pathname)
  })

  /*
        CREATE
  */
  app.post('/notes', (req, res) => {
    const notes  = db.collection('notes')
    const note   = { title: req.body.title, text: req.body.text }
    notes.insertOne(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occured!'})
      } else {
        res.send(result.ops[0])
      }
    })
  })
}

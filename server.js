var app              = require('express')()
var port             = 8080
var bodyParser       = require('body-parser')
const MongoClient    = require('mongodb').MongoClient
const db             = require('./config/db')


/*
     BODY PARSER CONFIG
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

/*
     MONGO CONNECTION
*/
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(`ERROR :: ${err}`)
  require('./routes')(app, database)
})


app.listen(port, () => {
  console.log('[------ NODEJS APP RUNNING ON :8080 ------]')
})

module.exports = app

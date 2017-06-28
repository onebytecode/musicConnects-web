var app              = require('express')()
var port             = 8080
var bodyParser       = require('body-parser')
const MongoClient    = require('mongodb').MongoClient
const db             = require('./config/db')
const ENV            = process.env.NODE_ENV || 'dev'

app.root = __dirname


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
  console.log(`=============== APP RUNNING ON ${port} ==========\n===== ENV IS ${ENV}`)
})

module.exports = app

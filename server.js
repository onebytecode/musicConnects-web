var app              = require('express')()
var port             = 8080
var bodyParser       = require('body-parser')
const ENV            = process.env.NODE_ENV || 'dev'
const logger         = require('./logging')
const morgan         = require('morgan')
const db             = require('./db')()
const models         = require('./models')(db)
const controllers    = require('./controllers')(models)

app.root    = __dirname
app.logger  =  logger
app.models  =  models
app.controllers = controllers

// DB CONNECTION
require('./db')().connect.then(
  success => {
    console.log(`Connection to db status ${success.status}`);
    require('./routes')(app)
  }, error => {
    console.log(`Connection to db status ${error.status}`);
  }
)

/*
     BODY PARSER CONFIG
*/
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.listen(port, () => {
  logger(`Server running on :: ${port}`, '', 'GOOD')
  logger(`Node enviroment is ${ENV}`, '', 'GOOD')
})

module.exports = app

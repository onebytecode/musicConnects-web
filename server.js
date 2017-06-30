var app              = require('express')()
var port             = 8080
var bodyParser       = require('body-parser')
const ENV            = process.env.NODE_ENV || 'dev'
const logger         = require('./logging')

app.root    = __dirname
app.logger  =  logger
app.models  =  require('./models')

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
require('./routes')(app)



app.listen(port, () => {
  logger(`Server running on :: ${port}`, '', 'GOOD')
  logger(`Node enviroment is ${ENV}`, '', 'GOOD')
})

module.exports = app

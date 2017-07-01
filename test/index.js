const server = require('../server')
const chai      = require('chai')
const chai_http = require('chai-http')
const should    = chai.should()
const expect    = chai.expect

chai.use(chai_http)

require('./routes')(server, chai, should, expect)

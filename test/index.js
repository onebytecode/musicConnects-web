const server       = require('../server')
const models       = server.models
const chai         = require('chai')
const chai_http    = require('chai-http')
const should       = chai.should()
const expect       = chai.expect
const controllers  = require('../controllers')(models)
const Promise      = require('bluebird')
const db           = require('../db')()

chai.use(chai_http)

describe('Testing Routes', () => {
  require('./routes')(server, chai, should, expect)
})
describe('Testing db', () => {
  require('./db')(db, should)
})
describe('Testing controllers', () => {
  require('./controllers')(controllers, should, expect)
})

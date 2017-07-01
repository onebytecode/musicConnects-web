const server    = require('../server')
const chai      = require('chai')
const chai_http = require('chai-http')
const should    = chai.should()
const expect    = chai.expect
const Promise   = require('bluebird')

chai.use(chai_http)

describe('Testing Routes', () => {
  require('./routes')(server, chai, should, expect)
})

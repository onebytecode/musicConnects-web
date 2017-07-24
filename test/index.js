const server       = require('../server')
const models       = server.models
const controllers  = server.controllers
const db           = server.db
const config       = server.config
const chai         = require('chai')
const chai_http    = require('chai-http')
const should       = chai.should()
const expect       = chai.expect
const Promise      = require('bluebird')

chai.use(chai_http)

describe('Testing config', () => {
  require('./config')(config, expect)
})
describe('Testing Routes', () => {
  require('./routes')(server, chai, should, expect, config)
})
describe('Testing db', () => {
  require('./db')(db, should)
})
describe('Testing controllers', () => {
  require('./controllers')(controllers, should, expect)
  after( async () => {
    await db.mongoose.connections[0].collections['bands'].drop()
    await db.mongoose.connections[0].collections['users'].drop()
    await db.mongoose.connections[0].collections['artists'].drop()

  })
})

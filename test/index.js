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
const drop_db      = require('../scripts/drop_db')
const seed         = require('../scripts/seed')

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
describe('Testing models', () => {
  require('./models')(db, expect, should)
  after( async () => {
    const a = db.mongoose.connections[0].collections
    if (a['bands']) await a['bands'].drop()
    if (a['users']) await a['users'].drop()
    if (a['artists']) await a['artists'].drop()
    if (a['biographies']) await a['biographies'].drop()
  })
})
describe('Testing controllers', () => {
  require('./controllers')(controllers, db.mongoose, should, expect)
  after( async () => {
    const a = db.mongoose.connections[0].collections
    if (a['bands']) await a['bands'].drop()
    if (a['users']) await a['users'].drop()
    if (a['artists']) await a['artists'].drop()
    // if (a['biographies']) await a['biographies'].drop()
  })
})

describe('Testing graphql', () => {
  before (async () => {
    await seed(db.mongoose, { silent: true })
  })
  require('./graphql')(server, chai, expect)
  after (async () => {
    await drop_db(db.mongoose)
  })
})

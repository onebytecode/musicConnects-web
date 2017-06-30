module.exports = (server) => {
  const chai      = require('chai')
  const chai_http = require('chai-http')
  const should    = chai.should()
  const expect    = chai.expect

  chai.use(chai_http)

  // GET REQUESTS FOR MAIN PAGE
  describe('Get main page', () => {
    it('it should get status OK', done => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
    describe('Get main.js.gz', () => {
      it('it should have status 200', done => {
        chai.request(server)
          .get('/public/main.js.gz')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
      it('it should have headers \'content-encoding: gzip\'', done => {
          chai.request(server)
            .get('/public/main.js.gz')
            .end((err, res) => {
              expect(res).to.have.header('content-encoding', 'gzip')
              done()
            })
      })
    })

  })
}

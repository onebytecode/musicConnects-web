module.exports = (server, chai, should, expect) => {
  describe('Get resources', () => {
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

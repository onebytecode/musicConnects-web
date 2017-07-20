// API TEST

// V1

module.exports = (server, chai, should, expect, secret) => {
  describe('Auth token tests', () => {
    it('it should get 401', done => {
      chai.request(server)
        .get('/api/connectivity_test')
        .end((err, res) => {
          expect(err.status).to.be.equal(401)
          done()
        })
    })
  })
}

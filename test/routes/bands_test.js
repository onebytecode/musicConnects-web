module.exports = (server, chai, should, expect) => {
  
  describe('Get bands', () => {
    it('it should get bands', done => {
      chai.request(server)
        .get('/bands')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })
}

module.exports = (server, chai, should, expect) => {

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
  })
}

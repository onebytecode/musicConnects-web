// USER MODEL GRAPHQL TESTS

module.exports = (server, chai, expect) => {
  describe('User gql ', () => {
    it('should get user with id and name fields', (done) => {
      chai.request(server)
        .get('/gql')
        .send({
          query: `{ getUser(id: 1) { id name }}`
        }).end((err, res) => {
          if (err) done(err)
          const d = res.data
          expect(d).to.be.a('object')
          console.log(d);
          done()
        })
    })
  })
}

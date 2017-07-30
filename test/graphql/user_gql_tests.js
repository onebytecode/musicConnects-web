// USER MODEL GRAPHQL TESTS

module.exports = (server, chai, expect) => {
  describe('User gql ', () => {
    it('should get user with id and name fields', (done) => {
      chai.request(server)
        .get('/gql')
        .send({
          query: `{ getUser(id: 1) { id name }}`
        }).end((err, { body : { data: { getUser: u } } }) => {
          if (err) done(err)
          expect(u).to.be.a('object')
          done()
        })
    })
  })
}

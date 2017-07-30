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
          expect(u.name).to.be.a('string')
          expect(u.id).to.be.equal(1)
          done()
        })
    })
    it ('should create user', (done) => {
      chai.request(server)
        .post('/gql')
        .send({
          query: `mutation { createUser(data:
                       { name: "Boris Tretiy",
                         age: "1988",
                         bands: [1, 2],
                         artists: [2, 3]
                        }) { id name age bands artists}} `
        }).end((err, data) => {
          console.log(data);
          if (err) return done(err)
          expect(u.id).to.be.a('number')
          expect(u.age).to.be.equal(29)
          done()
        })
    })
  })
}

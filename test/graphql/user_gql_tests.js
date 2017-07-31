// USER MODEL GRAPHQL TESTS

module.exports = (server, chai, expect, assert) => {
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
        }).end((err, { body: { data: { createUser: u } } }) => {
          if (err) return done(err)
          expect(u.id).to.be.a('number')
          expect(u.age).to.be.equal('29')
          assert(u.bands, [1, 2])
          assert(u.artists, [2, 3])
          done()
        })
    })
    it ('should update user', (done) => {
      chai.request(server)
        .post('/gql')
        .send({
          query: `mutation {
            updateUser(data: {
              id: 1,
              name: "Updated User",
              age: "1999 01 04",
              bands: [1, 5],
              artists: [4, 12, 46]
            }) {
              id
              name
              age
              bands
              artists
            }
          }`
        }).end((err, data) => {
          if (err) return done(err)
          const { body: { data: { updateUser: u } } } = data
          expect(u.id).to.be.equal(1)
          assert(u.age, '18')
          assert(u.bands, [1, 5])
          assert(u.artists, [4, 12, 46])
          done()
        })
    })
  })
}

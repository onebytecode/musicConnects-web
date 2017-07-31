// BAND MODEL GRAPHQL TESTS

module.exports = (bundle) => {
  const { server, chai, expect, assert }  = bundle

  describe('Band gql ', () => {
    it ('should create Band', done => {
      chai.request(server)
        .post('/gql')
        .send({
          query: `mutation {
            createBand(data: {
              name: "Grizzly Bear",
              subscribers: [1, 2]
            }) {
              id
              name
              subscribers
            }
          }`
        }).end((err, res) => {
          if (err) return done(new Error(err.response.text))
          const { body: { data: { createBand: b }}} = res
          expect(b.id).to.be.a('number')
          assert(b.name, "Grizzly Bear")
          assert(b.subscribers, [1, 2])
          done()
        })
    })
  })

}

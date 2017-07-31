// BAND MODEL GRAPHQL TESTS

module.exports = (bundle) => {
  const { server, chai, expect, assert }  = bundle
  let bandID
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
          bandID = b.id
          assert(b.name, "Grizzly Bear")
          assert(b.subscribers, [1, 2])
          done()
        })
    })
    it ('should get Band', done => {
      chai.request(server)
        .get('/gql')
        .send({
          query: `{
            getBand(id: ${bandID}) {
              id
              name
              subscribers {
                id
                name
              }
            }
          }`
        }).end((err, res) => {
          if (err) return done(new Error(err.response.text))
          const { body: { data: { getBand: b } } } = res
          assert(b.id, bandID)
          assert(b.name, "Grizzly Bear")
          expect(b.subscribers).to.be.an('array')
          done()
        })
    })
    it ('should update Band', done => {
      chai.request(server)
        .post('/gql')
        .send({
          query: `mutation {
            updateBand(data: {
              id: ${bandID},
              name: "Rainbow",
              subscribers: [1]
            }) {
              id
              name
              subscribers
            }
          }`
        }).end((err, res) => {
          if (err) return done(new Error(err.response.text))
          const { body: { data: { updateBand: b } } } = res
          assert(b.id, bandID)
          assert(b.name, "Rainbow")
          assert(b.subscribers, [1])
          done()
        })
    })
    it ('should delete band', done => {
      chai.request(server)
        .post('/gql')
        .send({
          query: `mutation {
            deleteBand(data: {
              id: ${bandID}
            }) {
              id
              name
              subscribers
            }
          }`
        }).end((err, res) => {
          if (err) return done(new Errorr(err.response.text))
          const { body: { data: { deleteBand: b } } } = res
          assert(b.id, bandID)
          assert(b.name, "Rainbow")
          assert(b.subscribers, [1])
          done()
        })
    })
  })

}

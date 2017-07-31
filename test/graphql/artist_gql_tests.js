// ARTIST GRAPHQL MODEL TESTS

module.exports = (bundle) => {
  const { server, chai, expect, assert, gqlPath } = bundle

  let artistID

  describe ('Artist gql ', () => {
    it ('should create Artist', done => {
      chai.request(server)
        .post(gqlPath)
        .send({
          query: `mutation {
            createArtist(data: {
              fullName: "Samuel Jack Jackson",
              bands: {
                current: 1
              }
            }) {
              id
              fullName
              bands {
                current
              }
            }
          }`
        }).end((err, res) => {
          if (err) return done(new Error(err.response.text))
          const { body: { data: { createArtist: a } } } = res
          expect(a.id).to.be.a('number')
          artistID = a.id
          assert(a.fullName, "Samuel Jack Jackson")
          assert(a.bands.current, 1)
          done()
        })
    })
    it ('should get Artist', done => {
      chai.request(server)
        .get('/gql')
        .send({
          query: `{
            getArtist(id: ${artistID}) {
              id
              fullName
              bands {
                current {
                  id
                  name
                }
              }
            }
          }`
        }).end((err, res) => {
          if (err) return done(new Error(err.response.text))
          const { body: { data: { getArtist: a } } } = res
          assert(a.id, artistID)
          assert(a.fullName, "Samuel Jack Jackson")
          expect(a.bands.current).to.be.equal(null)
          done()
        })
    })
    it ('should update Artist', done => {
      chai.request(server)
        .post('/gql')
        .send({
          query: `mutation {
            updateArtist(data: {
              id: ${artistID},
              fullName: "Cap Cappins",
              bands: {
                current: 2
              }
            }) {
              id
              fullName
              bands {
                current
              }
            }
          }`
        }).end((err, res) => {
          if (err) return done(new Error(err.response.text))
          const { body: { data: { updateArtist: a } } } = res
          assert(a.id, artistID)
          assert(a.fullName, "Cap Cappins")
          assert(a.bands.current, 2)
          done()
        })
    })
    it ('should delete Artist', done => {
      chai.request(server)
        .post(gqlPath)
        .send({
          query: `mutation {
            deleteArtist(data: {
              id: ${artistID}
            }) {
              id
              fullName
              bands {
                current
              }
            }
          }`
        }).end((err, res) => {
          if (err) return done(new Error(err.response.text))
          const { body: { data: { deleteArtist: a } } } = res
          assert(a.id, artistID)
          assert(a.fullName, "Cap Cappins")
          assert(a.bands.current, 2)
          done()
        })
    })
  })
}

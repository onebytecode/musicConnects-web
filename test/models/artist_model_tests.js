// ARTIST MODE TESTS

module.exports = ({mongoose}, expect, should) => {
  const Artist = mongoose.connection.model('Artist')

  describe('Artist model tests', () => {
    it ('it should create artist', async () => {
      try {
        const artist = await Artist.create({ _id: 1, fullName: "John Bonzo Bonhem" })
        expect(artist.fullName).to.be.equal('John Bonzo Bonhem')
      } catch (err) {
        throw new Error(err)
      }
    })
    it ('it should get artist with non-null biography', async () => {
      try {
        const artist = await Artist.findOne({ _id: 1 })
        const a = artist.biography
        expect(a).to.be.a('object')
        expect(a.foundation).to.be.a('object')
      } catch (err) {
        throw new Error(err)
      }
    })
  })
}

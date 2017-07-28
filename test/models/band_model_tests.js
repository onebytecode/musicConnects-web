// BAND MODEL TESTS


module.exports = ({mongoose}, expect, should) => {
  const Band = mongoose.connection.model('Band')
  const Biography = mongoose.connection.model('Biography')
  describe('Band model tests', () => {
    it ('it should create band', async () => {
      try {
        const band = await Band.create({ _id:1, name: 'ZZ Top' })
        expect(band.name).to.be.equal('ZZ Top')
      } catch(err) {
        throw new Error(err)
      }
    })
    it('it should get band with non-null biography', async () => {
      try {
        const band = await Band.findOne({ _id: 1 })
        const bio = band.biography
        expect(bio).to.be.a('object')
        expect(bio.foundation).to.be.a('object')
      } catch(err) {
        throw new Error(err)
      }
    })
    it ('it should update band\'s biography through', async () => {
      try {
        const band = await Band.findOne({ _id: 1 })
        const bio = band.biography
        const bioId = bio._id
        bio.foundation.date = new Date().getTime()
        band.save()
        expect(band.biography).to.be.a('object')
        expect(bio.foundation.date).to.be.a('string')
        const _bio = await Biography.findOne({ _id: bioId })
        _bio.foundation.date = bio.foundation.date
        _bio.save()
        expect(_bio.foundation.date).to.be.a('string')
      } catch(err) {
        throw new Error(err)
      }
    })
  })
}

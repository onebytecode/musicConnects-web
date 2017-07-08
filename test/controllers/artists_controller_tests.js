module.exports  =  (artists_controller, should, expect) => {
  describe('artists controller tests', () => {
    it('it should create artist', done => {
      artists_controller.create({
        id: 1,
        name: 'Guns and Roses'
      }, (err, artist) => {
        expect(err).to.be.equal(null)
        artist.should.be.a('object')
        artist.name.should.be.equal('Guns and Roses')
        done()
      })
    })
    it('it should get artist', done => {
      artists_controller.get({
        id: 1
      }, (err, artist) => {
        expect(err).to.be.equal(null)
        artist.id.should.be.equal(1)
        artist.name.should.be.equal('Guns and Roses')
        done()
      })
    })
    it('it should update artist', done => {
      artists_controller.update({
        id: 1,
        name: 'Updated Guns and Roses'
      }, (err, doc) => {
        expect(err).to.be.equal(null)
        doc.id.should.be.equal(1)
        done()
      })
    })
    it('it should delete artist with id 1', done => {
      artists_controller.delete({
        id: 1
      }, (err, artist) => {
        expect(err).to.be.equal(null)
        artist.id.should.be.equal(1)
        artist.name.should.be.equal('Updated Guns and Roses')
        done()
      })
    })
  })
}

module.exports  =  (artists_controller, should, expect) => {
  describe('artists controller tests', () => {
    it('it should create artist', done => {
      artists_controller.create({
        _id: 1,
        name: {
          firstName: 'Mick',
          secondName: 'Jagger'
        }
      }, (err, artist) => {
        expect(err).to.be.equal(null)
        artist.should.be.a('object')
        artist.fullName.should.be.equal('Mick Jagger')
        done()
      })
    })
    it('it should get artist', done => {
      artists_controller.get({
        _id: 1
      }, (err, artist) => {
        expect(err).to.be.equal(null)
        artist._id.should.be.equal(1)
        artist.fullName.should.be.equal('Mick Jagger')
        done()
      })
    })
    it('it should update artist', done => {
      artists_controller.update({
        _id: 1,
        name: {
          firstName: 'Saul',
          secondName: 'Hudson',
          sureName: 'Slash'
        }
      }, (err, doc) => {
        expect(err).to.be.equal(null)
        doc._id.should.be.equal(1)
        done()
      })
    })
    it('it should delete artist with id 1', done => {
      artists_controller.delete({
        _id: 1
      }, (err, artist) => {
        expect(err).to.be.equal(null)
        artist._id.should.be.equal(1)
        artist.fullName.should.be.equal('Saul Hudson')
        artist.name.sureName.should.be.equal('Slash')
        done()
      })
    })
  })
}

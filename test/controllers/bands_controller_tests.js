module.exports  =  (bands_controller, should, expect) => {
  describe('Bands controller tests', () => {
    it('it should create band', done => {
      bands_controller.create({
        id: 1,
        name: 'Guns and Roses'
      }, (err, band) => {
        expect(err).to.be.equal(null)
        band.should.be.a('object')
        band.name.should.be.equal('Guns and Roses')
        done()
      })
    })
    it('it should get band', done => {
      bands_controller.get({
        id: 1
      }, (err, band) => {
        expect(err).to.be.equal(null)
        band.id.should.be.equal(1)
        band.name.should.be.equal('Guns and Roses')
        done()
      })
    })
    it('it should update band', done => {
      bands_controller.update({
        id: 1,
        name: 'Updated Guns and Roses'
      }, (err, doc) => {
        expect(err).to.be.equal(null)
        doc.id.should.be.equal(1)
        done()
      })
    })
    it('it should delete band with id 1', done => {
      bands_controller.delete({
        id: 1
      }, (err, band) => {
        expect(err).to.be.equal(null)
        band.id.should.be.equal(1)
        band.name.should.be.equal('Updated Guns and Roses')
        done()
      })
    })
  })
}

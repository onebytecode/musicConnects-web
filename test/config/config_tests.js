module.exports = (config, expect) => {
  describe('Config tests', () => {
    describe('Db tests', () => {
      it('it should get db url', done => {
        expect(config.db.url).to.be.equal('mongodb://localhost:27017/test')
        done()
      })
    })
    describe('Allowed models tests', () => {
      it('it should get list of allowed models', done => {
        expect(config.allowed_models).to.be.a('array')
        expect(config.allowed_models).to.have.length(2)
        done()
      })
    })
  })
}

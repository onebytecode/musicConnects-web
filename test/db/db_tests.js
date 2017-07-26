module.exports = (db, should) => {
  describe('Connection test', () => {
    it('it should connect to db', done => {
      db.connect.then(
        success => {
          success.should.be.a('object')
          done()
        },
        err => {
          done(err)
        }
      )
    })
  })
}

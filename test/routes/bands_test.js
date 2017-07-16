module.exports = (server, chai, should, expect) => {

  describe('Post /bands', () => {
    describe('Post bands with right path', () => {
      it('it should get status 200', done => {
        chai.request(server)
          .post('/bands/')
          .send({
            'band': {
              '_id': '1',
              'name': 'metallica'
            }
          })
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
    })
  })

  describe('Get bands', () => {
    describe('Get bands wrong', () => {
      it('it should get status 400', done => {
        chai.request(server)
          .get('/band/')
          .end((err, res) => {
            res.should.have.status(404)
            done()
          })
      })
      it('it should get status 400', done => {
        chai.request(server)
          .get('/band/perviy')
          .end((err, res) => {
            res.should.have.status(400)
            done()
          })
      })
    })
    describe('Get bands right', () => {
      it('it should get band with id:1', done => {
        chai.request(server)
          .get('/band/1')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
    })
  })
  describe('Update bands', () => {
    it('it should add biography to band with id 1', done => {
      chai.request(server)
        .put('/band/1')
        .send({
          'band': {
            'id': '1',
            'name': 'metallica updated',
            'biography': 'metal group'
          }
        })
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
    it('it should get updated band', done => {
      chai.request(server)
        .get('/band/1')
        .end((err,res) => {
          res.should.have.status(200)
          res.body._id.should.be.equal(1)
          res.body.name.should.be.equal('metallica')
          done()
        })
    })
  })
  describe('Delete bands', () => {
    it('it should delete band with id 1', done => {
      chai.request(server)
        .delete('/band/1')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
    it('it should give 404', done => {
      chai.request(server)
        .get('/band/1')
        .end((err, res) => {
          res.should.have.status(404)
          done()
        })
    })
  })
}

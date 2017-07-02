module.exports = (server, chai, should, expect) => {

  describe('Post /bands', () => {
    describe('Post bands with wrong path', () => {
      it('it should get 400', done => {
        chai.request(server)
          .post('/bands/1')
          .end((err, res) => {
            res.should.have.status(400)
            done()
          })
      })
    })
    describe('Post bands with right path', () => {
      it('it should get status 200', done => {
        chai.request(server)
          .post('/bands')
          .send({
            'band': {
              'id': '1',
              'name': 'metallica'
            }
          })
          .end((err, res) => {
            if (err) console.log(err);
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
          .get('/bands')
          .end((err, res) => {
            res.should.have.status(400)
            done()
          })
      })
      it('it should get status 400', done => {
        chai.request(server)
          .get('/bands/perviy')
          .end((err, res) => {
            res.should.have.status(400)
            done()
          })
      })
    })
    describe('Get bands right', () => {
      it('it should get band with id:1', done => {
        chai.request(server)
          .get('/bands/1')
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
        .put('/bands/1')
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
  })
  describe('Delete bands', () => {
    it('it should delete band with id 1', done => {
      chai.request(server)
        .delete('/bands/1')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
    it('it should give error 500', done => {
      chai.request(server)
        .get('/bands/1')
        .end((err, res) => {
          res.should.have.status(500)
          done()
        })
    })
  })
}

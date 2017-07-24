// MODELS CONTROLLER TESTS
module.exports  =  (models_controller, should, expect) => {
  describe('Models controller tests', () => {
    describe('Testing User Model interactions', () => {
      it('it should create User', done => {
        models_controller.create({ name: 'Users'}, {
          _id: 1,
          name: "Petr Vtoroy",
          bands: [
            1, 2, 3
          ]
        }, (err, model) => {
          if (err) return done(new Error(err))
          expect(err).to.be.equal(null)
          model.should.be.a('object')
          expect(model.naming.fName).to.be.equal('Petr')
          expect(model.naming.sName).to.be.equal('Vtoroy')
          done()
        })
      })
      it('it should get User', done => {
        models_controller.get({ name: 'Users'}, {
          _id: 1
        }, (err, model) => {
          if (err) return done(new Error(err))
          expect(err).to.be.equal(null)
          model._id.should.be.equal(1)
          expect(model.naming.fName).to.be.equal('Petr')
          expect(model.naming.sName).to.be.equal('Vtoroy')
          done()
        })
      })
      it('it should update User', done => {
        models_controller.update({ name: 'Users'}, {
          _id: 1,
          naming: {
            fName: 'Petr',
            sName: 'Perviy'
          }
        }, (err, model) => {
          if (err) return done(new Error(err))
          expect(err).to.be.equal(null)
          model._id.should.be.equal(1)
          expect(model.naming.fName).to.be.equal('Petr')
          expect(model.naming.sName).to.be.equal('Perviy')
          done()
        })
      })
      it('it should delete User with id 1', done => {
        models_controller.delete({ name: 'Users' }, {
          _id: 1
        }, (err, model) => {
          if (err) return done(new Error(err))
          expect(err).to.be.equal(null)
          model._id.should.be.equal(1)
          done()
        })
      })
    })
    describe('Testing Bands Model interation', () => {
      it('it should create Band ', done => {
        models_controller.create({ name: 'Bands' }, {
          _id: 1,
          name: "Guns And Roses",
          subscribers: [
            1, 2, 3
          ]
        }, (err, result ) => {
          if (err) return done(new Error(err))
          expect(result.name).to.be.equal('Guns And Roses')
          done()
        })
      })

      it('it should delete Band', done => {
        models_controller.delete({ name: 'Bands' }, {
          _id: 1
        }, (err, result) => {
          if (err) return done(new Error(err))
          expect(result.name).to.be.equal('Guns And Roses')
          done()
        })
      })
    })
  })
}

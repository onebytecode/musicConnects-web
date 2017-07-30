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
          id: 1,
          name: 'Petr Perviy'
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
    describe('Testing User with Bands populate', () => {
      it ('it should create user with band population', async () => {
        const uCreation = await models_controller.create({ name: 'Users' }, {
          _id: 1,
          name: "Music Fun",
          bands: [1]
        })
        if (uCreation.error) throw new Error(uCreation.error)
        const user = model
        const bCreation = await models_controller.create({ name: 'Bands' }, {
          _id: 1,
          name: "Guns And Roses",
          subscribers: [1]
        })
        if (bCreation.error) throw new Error(bCreation.error)
        const { model, error } = await models_controller.get({ name: 'Users' }, { mParams: {
          _id:1
        }, mPopulate: 'bands' })
        if (error) throw new Error(error)
        expect(model.name).to.be.equal("Music Fun")
        expect(model.bands).to.be.a('array')
        expect(model.bands[0].name).to.be.equal('Guns And Roses')
      })
    })
    describe('Testing Artist belong to Band populate', () => {
      it('it should create artist which is belong to band', async () => {
        const aCreation = await models_controller.create({ name: 'Artists' }, {
          _id: 1,
          naming: {
            firstName: "Saul",
            secondName: "Hudson",
            surname: 'Slash'
          },
          bands: {
            current: 1
          }
        })
        if (aCreation.error) throw new Error(aCreation.error)
        const { error, model } = await models_controller.get({name: 'Artists'}, { mParams: {
          _id: 1
        }, mPopulate: { path: "bands.belong", model: 'Band' } })
        if (error) throw new Error(error)
        expect(model.fullName).to.be.equal('Saul Slash Hudson')
        expect(model.bands.current).to.be.a('object')
        expect(model.bands.current.name).to.be.equal('Guns And Roses')
      })
    })
  })
}

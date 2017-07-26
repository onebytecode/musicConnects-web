module.exports = (mongoose, autoIncrement) => {
  const { Schema } = mongoose
  const artistSchema = new Schema({
    _id: { type: Number, required: true },
    naming: {
      firstName: String,
      secondName: String,
      surname: String
    },
    birth: String,
    additional_info: String,
    biography: { type: Number, ref: 'Biography' },
    bands: {
      belong: { type: Number, ref: 'Band' }
    }
  })

  artistSchema.plugin(autoIncrement.plugin, {
    model: 'Artist',
    field: '_id',
    startAt: 1
  })

  const Biography = mongoose.connection.model('Biography')
  artistSchema.pre('save', async function(done) {
    const self = this
    if (!this.biography) {
      try {
        const bio = await Biography.create({})
        self.biography = bio._id
        done()
      } catch (err) {
        throw new Error(err)
      }
    }
  })

  artistSchema.pre('findOne', function(done) {
    this.populate('biography')
    done()
  })

  artistSchema.virtual('fullName')
    .get(function() {
      const fName = this.naming.firstName || ''
      const sName = this.naming.secondName || ''
      const surname = '"' + this.naming.surname + '"' || ''
      return fName + ' ' + surname + ' ' + sName
    })
    .set(function(name) {
      const n = this.naming
      const naming = name.split(/\s/)
      if (naming.length === 1) { n.firstName = naming[0] }
      else if (naming.length === 2) { n.firstName = naming[0]; n.secondName = naming[1] }
      else if (naming.length > 2) {
        n.firstName = naming[0]
        n.surname = naming[1]
        n.secondName = naming[2]
      }
    })
  const Artist  =  mongoose.model('Artist', artistSchema)

  return Artist
}

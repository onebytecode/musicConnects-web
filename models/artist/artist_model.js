module.exports = (mongoose, autoIncrement) => {
  const { Schema } = mongoose
  const artistSchema = new Schema({
    _id: { type: Number, required: true },
    naming: {
      firstName: String,
      secondName: String,
      surname: String
    },
    biography: String,
    birth: String,
    additional_info: String,
    bands: {
      belong: { type: Number, ref: 'Band' }
    }
  })

  artistSchema.plugin(autoIncrement.plugin, {
    model: 'Artist',
    field: '_id',
    startAt: 1
  })
  artistSchema.virtual('fullName')
    .get(function() {
      const fName = this.naming.firstName || ''
      const sName = this.naming.secondName || ''
      const surname = '"' + this.naming.surname + '"' || ''
      return fName + ' ' + surname + ' ' + sName
    })
  const Artist  =  mongoose.model('Artist', artistSchema)

  return Artist
}

module.exports = (mongoose, autoIncrement) => {
  const { Schema } = mongoose
  const artistSchema = new Schema({
    _id: { type: Number, required: true },
    name: {
      firstName: String,
      secondName: String,
      sureName: String
    },
    biography: String,
    birth: String,
    additional_info: String,
    _creator: { type: Number, ref: 'band' },
    bands: Array
  })

  artistSchema.plugin(autoIncrement.plugin, {
    model: 'Artist',
    field: '_id',
    startAt: 1
  })
  artistSchema.virtual('fullName')
    .get(function() {
      return this.name.firstName + ' ' + this.name.secondName
    })
  const Artist  =  mongoose.model('Artist', artistSchema)

  return Artist
}

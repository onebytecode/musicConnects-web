module.exports = (mongoose, autoIncrement) => {
  const { Schema } = mongoose
  const artistSchema = new Schema({
    _id: { type: Number, required: true },
    name: String,
    surename: String,
    nickname: String,
    biography: String,
    birth: String,
    additional_info: String,
    _creator: { type: Number, ref: 'band' },
    bands: [{ type: Schema.Types.ObjectId, ref: 'band' }]
  })

  artistSchema.plugin(autoIncrement.plugin, {
    model: 'artist',
    field: '_id',
    startAt: 1
  })
  const Artist  =  mongoose.model('artist', artistSchema)

  return Artist
}

module.exports = (mongoose, autoIncrement) => {
  const { Schema } = mongoose
  const artistSchema = new Schema({
    id: { type: Number, required: true },
    name: String,
    surename: String,
    nickname: String,
    biography: String,
    birth: String,
    additional_info: String,
    bands: Array
  })

  artistSchema.plugin(autoIncrement.plugin, {
    model: 'artist',
    field: 'id',
    startAt: 1
  })
  const Artist  =  mongoose.model('artist', artistSchema)

  return Artist
}

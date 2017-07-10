module.exports = (mongoose, autoIncrement) => {
  const {Schema}  =  mongoose
  const bandSchema = new Schema({
    _id: { type: Number, required: true },
    name: String,
    artists: [{ type: Schema.Types.ObjectId, ref: 'artist' }],
    biography: String,
    years: String,
    albums: Array,
    tours: Array,
    ratings: Array,
    additional_info: Array
  })

  bandSchema.plugin(autoIncrement.plugin, {
    model: 'band',
    field: '_id',
    startAt: 1
  })
  const Band  =  mongoose.model('band', bandSchema)


  return Band
}

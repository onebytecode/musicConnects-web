module.exports = (mongoose, autoIncrement) => {
  const {Schema}  =  mongoose
  const bandSchema = new Schema({
    id: { type: Number, required: true },
    name: String,
    artists: Array,
    biography: String,
    albums: Array,
    tours: Array,
    ratings: Array,
    additional_info: Array
  })

  bandSchema.plugin(autoIncrement.plugin, {
    model: 'band',
    field: 'id',
    startAt: 1
  })
  const Band  =  mongoose.model('band', bandSchema)


  return Band
}

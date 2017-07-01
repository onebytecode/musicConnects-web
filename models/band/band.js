module.exports = (mongoose, autoIncrement) => {
  const {Schema}  =  mongoose
  const bandSchema = new Schema({
    id: Number,
    name: String,
    artists: Array,
    biography: String,
    albums: Array,
    tours: Array,
    ratings: Array,
    additional_info: Array
  })

  const Band  =  mongoose.model('band', bandSchema)
  bandSchema.plugin(autoIncrement.plugin, {
    model: 'band',
    field: 'id'
  })

  return Band
}

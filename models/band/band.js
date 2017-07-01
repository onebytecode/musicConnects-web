module.exports = (mongoose) => {
  const {Schema}  =  mongoose

  const bandSchema = new Schema({
    name: String,
    artists: Array,
    biography: String,
    albums: Array,
    tours: Array,
    ratings: Array,
    additional_info: Array
  })

  const Band  =  mongoose.model('band', bandSchema)
  return Band
}

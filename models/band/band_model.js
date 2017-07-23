// BAND MODEL
module.exports = (mongoose, autoIncrement) => {
  const {Schema}  =  mongoose
  const bandSchema = new Schema({
    _id: { type: Number, required: true },
    name: String,
    artists: Array,
    biography: String,
    years: String,
    albums: Array,
    tours: Array,
    ratings: Array,
    additional_info: Array,
    subscribers: [{ type: Schema.Types.ObjectId, ref: 'User'}]
  })

  bandSchema.plugin(autoIncrement.plugin, {
    model: 'Band',
    field: '_id',
    startAt: 1
  })
  const Band  =  mongoose.model('Band', bandSchema)


  return Band
}

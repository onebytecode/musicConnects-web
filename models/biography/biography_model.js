// BIOGRAPHY MODEL

module.exports = (mongoose, autoIncrement) => {
  const {Schema}  =  mongoose


  const biographieschema = new Schema({
    _id: { type: Number, required: true },
    foundation: {
      date: String,
      story: String
    },
    popularization: {
      date: String,
      story: String
    },
    nowadays: String,
    __creator: { type: Number, unique: true }
  })

  biographieschema.plugin(autoIncrement.plugin, {
    model: 'Biography',
    field: '_id',
    startAt: 1
  })
  const Biography  =  mongoose.model('Biography', biographieschema)

  return Biography
}

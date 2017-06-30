module.exports = (req, res, app) => {
  const Bands = app.models().getBands().all()
  console.log(Bands);
  res.sendStatus(200)
}

module.exports = (req, res, app) => {
  app.models().Bands.all.then((success) => {
    console.log(success);
    res.sendStatus(200)
  }, (err) => {
    console.log(err);
    res.sendStatus(500)
  })
  // res.sendStatus(200)
}

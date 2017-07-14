module.exports = (req, res) => {

  res.setHeader("content-encoding", "gzip")
  res.sendFile(req.app.root + req.path)
}

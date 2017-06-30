module.exports = (req, res) => {
  const ROOT  =  app.root
  const path  =  req.path

  res.setHeader("content-encoding", "gzip")
  res.sendFile(ROOT + req.path)
}

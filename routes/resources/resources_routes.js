module.exports = (req, res) => {

  if (req.path === '/public/main.js.gz') {
    res.setHeader("content-encoding", "gzip")
  }
  res.sendFile(req.app.root + req.path)
}

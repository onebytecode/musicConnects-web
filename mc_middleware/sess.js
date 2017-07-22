//  SESS

module.exports = (req, res, next) => {
  const sess = req.session
  console.log(sess.name);
  if (sess.views) {
    sess.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + sess.views + '</p>')
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    sess.views = 1
    res.end('Welcome to session test')
  }
}

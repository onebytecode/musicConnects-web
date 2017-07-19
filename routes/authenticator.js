// AUTHENTICATOR

module.exports = (req, res, next, secret) => {
  console.log('Auth');
  const authenticate = () => {
    const reqSecret = req.get('API_TOKEN')
    console.log(reqSecret, secret);
    if (!reqSecret) return res.sendStatus(401)
    if (reqSecret !== secret) return res.sendStatus(401)
    next()
  }

  return authenticate()
}

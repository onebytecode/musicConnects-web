// AUTHENTICATOR

module.exports = (req, res, next, secret) => {
  const authenticate = () => {
    const reqSecret = req.get('API_TOKEN')
    if (!reqSecret) return res.sendStatus(401)
    if (reqSecret !== secret) return res.sendStatus(401)
    console.log(`Before next`);
    next()
  }

  return authenticate()
}

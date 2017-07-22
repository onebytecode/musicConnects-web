// MC SESSION MIDDLEWARE

const session = require('express-session')
module.exports = () => {
  const sSession = session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 60000 },
    name: 'connect.sid'
  })

  return sSession
}

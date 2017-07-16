// MAIL HELPER
const mailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const sendMail = (transporter, message, cb) => {
  transporter.sendMail(message, (err, res) => {
    cb(err, res)
  })
}

module.exports = (secrets) => {
  const { yandexLogin, yandexPass } = secrets
  const transporter = mailer.createTransport(smtpTransport({
    service: 'Yandex',
    auth: {
      user: yandexLogin,
      pass: yandexPass
    }
  }))
  const makeMessage = (to, subj, entity) => {
    const message = {
      from: yandexLogin,
      to: to,
      subject: subj,
      text: entity
    }
    return message
  }

  const sendMailToUser = (to, subj, entity, cb) => {
    const msg = makeMessage(to, subj, entity)
    sendMail(transporter, msg, cb)
  }

  const methods = {
    sendMailToUser: sendMailToUser,
    secrets: yandexPass,
    sass: yandexLogin
  }

  return methods
}

// REGISTRATIONS CONTROLLER
module.exports = (models_controller, helpers, links) => {
  const { tokens_helper, mail_helper } = helpers

  const registrateUserByEmail = (mail, cb) => {
    const token = tokens_helper.regToken
    const newUser = {
      mails: {
        mcMail: mail
      },
      tokens: {
        regToken: token
      }
    }
    const regLink = links.server_link + '/user/authorize?token=' + token
    mail_helper.sendMailToUser(mail, 'Tema', regLink, (err, msg) => {
      
    })
    models_controller.create({ name: 'Users' }, newUser, (err, data) => {
      cb(err, data)
    })
  }

  const methods = {
    registrateUserByEmail: registrateUserByEmail
  }
  return methods
}

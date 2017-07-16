module.exports = (secrets) => {
  const crudHelper = require('./crud_helper')()
  const tokensHelper = require('./tokens_helper')()
  const mailHelper = require('./mail_helper')(secrets)
  const helpers = {
    crud_helper: crudHelper,
    tokens_helper: tokensHelper,
    mail_helper: mailHelper
  }
  return helpers
}

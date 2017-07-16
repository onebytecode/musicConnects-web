// TOKENS HELPER

const generateRegToken = () => {
  const numbers = parseInt(Math.random() * 1e12)
  return numbers
}
module.exports = () => {
  const regToken = generateRegToken()

  const tokens = {
    regToken: regToken
  }

  return tokens
}

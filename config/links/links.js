// LINKS

module.exports = () => {
  const ENV = process.env.NODE_ENV
  const server_link = ENV === 'dev' ? '127.0.0.1:8080' : 'musicconnects.onebytecode.com'

  const links = {
    server_link: server_link
  }
  return links
}

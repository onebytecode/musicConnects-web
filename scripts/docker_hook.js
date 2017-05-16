var request = require('request')
var _uri = 'https://registry.hub.docker.com/u/onebytecode/musicconnects-web/trigger/19bf93ec-1e2c-4546-a2d8-d24eb14d9462/'
console.log('Hoocking');
request({
  method: 'POST',
  uri: _uri,
  multipart: [
      {
        'content-type': 'application/json',
        body: JSON.stringify({ source_type: 'Branch', source_name: 'jam' })
      }
    ],
})

// SECRETS READER
const fs  =  require('fs')
const readFileAsArray = (path) => {
  const data = fs.readFileSync(path, 'UTF-8')
  const arrayData = data.split(/\n/)
  return arrayData
}
const arrayToMap = (array) => {
  const mapArray = {}
  let tempElement
  array.forEach((element) => {
    tempElement = element.split(/\=/).map((el) => { return el.trim() })
    mapArray[tempElement[0]] = tempElement[1]
  })
  return mapArray
}
module.exports = (path) => {
  const arraySecrets = readFileAsArray(path)
  const mapSecrets = arrayToMap(arraySecrets)
  return mapSecrets
}

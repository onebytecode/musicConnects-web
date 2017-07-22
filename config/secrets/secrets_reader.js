// SECRETS READER
const fs  =  require('fs')
const readFileAsArray = (path) => {
  try {
    const data = fs.readFileSync(path, 'UTF-8')
    const arrayData = data.split(/\n/)
    const mapData = arrayToMap(arrayData)
    return mapData
  } catch (ex) {
    data = process.env
    return data
  }

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
  const mapSecrets = readFileAsArray(path)
  return mapSecrets
}

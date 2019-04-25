import fs = require('fs')
import path = require('path')
interface IField {
  version: string
}
const basePath = path.resolve(__dirname, '../../')

const getPackageField: () => Promise<IField> = () => {
  const readSteam = fs.createReadStream(`${basePath}/package.json`)
  return new Promise((resolve, reject) => {
    readSteam.on('data', (chunk) => {
      resolve(JSON.parse(chunk.toString()))
    })
  })
}
export {
  getPackageField
}
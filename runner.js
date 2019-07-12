const fs = require('fs')
const csv = require('csv-parse')
const args = process.argv.slice(2)


consQuestion = (filePath) => {
const data = fs.readFileSync(filePath, 'utf8')
dataArr = data.split('\r\n')
for (let i = 0; i < dataArr.length; i += 3) {
    console.log(dataArr[i])
    
}
//console.log(dataArr)
consQuestion(args[0])

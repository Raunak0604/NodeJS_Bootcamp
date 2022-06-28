const fs = require('fs'); 

// fs.readFile('06_File.txt', 'utf8', (err, data)=>{
//     console.log(err, data)
// })

const a = fs.readFileSync('06_File.txt')
console.log(a.toString())

// fs.writeFile('07_file2.txt', "This is a data", ()=>{
//     console.log("Written to the file")
// });

b = fs.writeFileSync('07_file2.txt', "This is a data2")
console.log(b)

console.log("Finished reading file")
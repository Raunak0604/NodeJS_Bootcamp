const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/website', (req, res) => {
    const data = fs.readFileSync('13_Website.html'); 
    res.send(data.toString())
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express');
const https = require('https')
const fs = require('fs')

const app = express()


app.get('/', (req, res) => {
  res.send('Hello HTTPS!')
})

https.createServer({
    key: fs.readFileSync('/Users/faraguti/server.key'),
    cert: fs.readFileSync('/Users/faraguti/server.cert')
}, app).listen(3000, () => {
  console.log('Listening...')
})
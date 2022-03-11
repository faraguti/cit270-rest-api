const express = require('express');
const https = require('https')
const fs = require('fs')
const app = express()
const port = 443
const md5 = require('md5');
const bodyParser = require('body-parser');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello HTTPS!')
  })
  
  https.createServer({
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert'),
      passphrase:'P@ssw0rd'
  }, app).listen(port, () => {
    console.log('Listening...')
  })


app.use(bodyParser.json());

app.post('/login', (req,res) =>{
    console.log(JSON.stringify(req.body));
    console.log("Here is the password " + req.body.password)
    if(req.body.userName =="faraguti" && md5(req.body.password)=="ed8d20de1864bc073df52d0fe74b9031"){
        res.send("Welcome!")
    } else{
        res.send("Who are you?");
    }
});

// app.listen(port, ()=>{});
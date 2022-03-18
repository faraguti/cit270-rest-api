const express = require('express');
const https = require('https')
const fs = require('fs')
const app = express()
const port = 443
const md5 = require('md5');
const bodyParser = require('body-parser');
let invalidLoginAttempts=0;

app.use(express.static('public'));
app.use(bodyParser.json());


app.post('/login', (req,res) =>{
    console.log(JSON.stringify(req.body));
    if(invalidLoginAttempts>=5){
        res.status(401);//unauthorized
    }
    // console.log("Here is the password " + req.body.password)
    else if(req.body.userName =="faraguti" && md5(req.body.password)=="ed8d20de1864bc073df52d0fe74b9031"){
        res.send("Welcome!")
    } else{
        invalidLoginAttempts++;
        console.log(invalidLoginAttempts+" invalid attempts")
        res.status(401);//unauthorized
        res.send("Who are you?")    
    }
});


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

// app.listen(port, ()=>{});
const express = require('express');
const https = require('https')
const fs = require('fs')
const app = express()
// const md5 = require('md5');
// const bodyParser = require('body-parser');


app.get('/', (req, res) => {
    res.send('Hello HTTPS!')
  })
  
  https.createServer({
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert')
  }, app).listen(3000, () => {
    console.log('Listening...')
  })


// const port = 3000;

// const app = express();

// app.use(bodyParser.json());

// app.get('/', (req, res)=>{
//     res.send("Hello Browser");
// });

// app.post('/login', (req,res) =>{
//     console.log(JSON.stringify(req.body));
//     if(req.body.userName =="faraguti" && md5(req.body.password)=="81dc9bdb52d04dc20036dbd8313ed055"){
//         res.send("Welcome!")
//     } else{
//         res.send("Who are you?");
//     }
// });

// app.listen(port, ()=>{});
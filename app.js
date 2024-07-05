
// //The good ones


// function SendForm() {
//   console.log("Monkey")
// };




require("dotenv").config();



// const http = require("http");
const express = require("express");
const app = express();
const path = require("node:path");
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

//app.use(bodyParser.json())


//const PORT = 3000; // Defining PORT

app.use(express.static(path.join(__dirname)))



 app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
  res.sendFile(path.join(__dirname,  'sendgridpart2.css'))


  
  res.end();
});



 
   app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
   })


   
// app.post ('/submit', (req, res) =>{
// console.log('To' + req.body.To)
// console.log('From' + req.body.From)
// })

app.post ('/submit', (req,res) => {




 const sgMail = require("@sendgrid/mail");
 sgMail.setApiKey(process.env.APIKEY);
  const msg = {
    to: req.body.To,
    from: req.body.From, // Use the email address or domain you verified above
    subject: req.body.Subject,
    text: req.body.Message,
    html: req.body.Message,
  };
  sgMail
    .send(msg)
    .then((response) => {
     console.log(response[0].statusCode);
      console.log(response[0].headers);
   })
   .catch((error) => {
      console.error(error);
   });

})






//  require("dotenv").config();

//  const express = require("express");
//  const app = express();

//  const httpServer = require('http').createServer(app);
//  let PORT;
//  //console.log(PORT)
//  process.env.STATUS === 'production'
// console.log(`${process.env.STATUS} is the process env status`)
//  ?(PORT = process.env.PROD_PORT)
//  :(PORT = process.env.DEV_PORT)
//  console.log(`Test ${process.env.STATUS} test :${PORT}`)
//  httpServer.listen(PORT, () => {
//    console.log(`Server in ${process.env.STATUS} mode, listening on *:${PORT}`)
//  });






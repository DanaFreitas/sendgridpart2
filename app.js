 import url from "node:url";
 import path from "node:path";
 import express from "./node_modules/express/index.js";
 import bodyParser from "./node_modules/body-parser/index.js";
 import sgMail from './node_modules/@sendgrid/mail/index.js';
 import process from 'node:process';
 //import dotenv from './node_modules/dotenv/config.js' ;
import dotenv from 'dotenv';


// import url from "node:url";
 //import path from "node:path";
 //import express from "express";
 //import bodyParser from "body-parser";
 //import sgMail from '@sendgrid/mail';
 //import process from 'node:process';
 //import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "www.sendgridtesting.uk"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 80; // Defining PORT
  //This was for the localhost. 


//const apikey = process.env.API_KEY;


  // sgMail.setApiKey(apikey)


app.use(express.static(path.join(__dirname)));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, import.meta.url));
  res.sendFile(path.join(__dirname, "index.html"));
  res.sendFile(path.join(__dirname, "sendgridpart2.css"));
  res.end();
});
//They key is connecting this...somehow


app.listen(PORT,
   '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  })
   

//   const msg = {
//    to:'danarobertfreitas@gmail.com',
//    from: 'danarobertfreitas@gmail.com',
//    subject: 'Message',
//    text: 'Hello. To all of those who are reading, I hope this test works. It has been many months, but I am sure that I will prevail.',
//    html: '<h1>Hello. To all of those who are reading, I hope this test works. It has been many months, but I am sure that I will prevail.</h1>',
//   };
//  console.log(typeof 'msg')
//  console.log(`The message is ${msg}`)
//   sgMail
//   .send(msg)
//   .then((response) => {
//  console.log(response[0].statusCode);
//  console.log(response[0].headers);
//  console.log(msg)    })
//  .catch((error) => {
//  console.error(error),
//  console.error('Error sending email:', error.response.body);
//  });


 //This isnt part of the atutomatic trigger. 
 
 app.post("/submit", (req, res) => {
 sgMail.setApiKey(apikey)
 
   const msg = {
     to: "danarobertfreitas@gmail.com",  //req.body.To
   from: "danarobertfreitas@gmail.com", 
 replyTo: req.body.From,
      subject: req.body.Subject,
      text: req.body.Message,
      html: req.body.Message,
   
    };
    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].headers);
  console.log(msg)    })
      .catch((error) => {
        console.error(error);
      });   
  //   res.redirect('/');



      });




      

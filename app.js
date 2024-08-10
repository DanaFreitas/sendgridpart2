
import url from "node:url";
import path from "node:path";
import express from "/node_modules/express/index.js";
import bodyParser from "body-parser";
import sgMail from '@sendgrid/mail';
import process from 'node:process';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

//const PORT = 3000; // Defining PORT
  //This was for the localhost. 

const apikey = process.env.API_KEY;


   sgMail.setApiKey(apikey)


app.use(express.static(path.join(__dirname)));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, import.meta.url));
  res.sendFile(path.join(__dirname, "index.html"));
  res.sendFile(path.join(__dirname, "sendgridpart2.css"));
  res.end();
});
//They key is connecting this...somehow



 //app.listen(PORT, () => {
 //console.log(`Server running on port ${PORT}`);
  
  //})


 const msg = {
  to:'danafreitas@proton.me',
  from: 'danafreitas@proton.me',
  subject: 'Message',
  text: 'Hello. To all of those who are reading, I hope this test works. It has been many months, but I am sure that I will prevail.',
  html: '<h1>Hello. To all of those who are reading, I hope this test works. It has been many months, but I am sure that I will prevail.</h1>',
 

 };

console.log(typeof 'msg')
 console.log(`The message is ${msg}`)

//const parsedData = JSON.parse(msg)

//console.log(parsedData)

 sgMail
 .send(msg)
 .then((response) => {
   console.log(response[0].statusCode);
   console.log(response[0].headers);
console.log(msg)    })
 .catch((error) => {
   console.error(error),
   console.error('Error sending email:', error.response.body);
 });


 //This isnt part of the atutomatic trigger. 

// app.post("/submit", (req, res) => {
//   sgMail.setApiKey(apikey)

  
//   const msg = {
//     to: req.body.To,
//     from: req.body.From, 
//     subject: req.body.Subject,
//     text: req.body.Message,
//     html: req.body.Message,
    
//   };
//   sgMail
//     .send(msg)
//     .then((response) => {
//       console.log(response[0].statusCode);
//       console.log(response[0].headers);
// console.log(msg)    })
//     .catch((error) => {
//       console.error(error);
//     });
    
// });

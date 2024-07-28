
//import url from "url";
//import path from "path";
//import bodyParser from "body-parser";

  //Not sure why the value is never read. 
        //import express from "express";
        //import nodemon from "nodemon";
//const sgMail = require('@sendgrid/mail')
        import sgMail from '@sendgrid/mail';
        //import process from 'node:process';
      import dotenv from 'dotenv';
        dotenv.config();
        //const app = express();
//const __filename = url.fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename)
//app.use(express.static(path.join(__dirname)));

        //const PORT = 3000; // Defining PORT

        //app.use(express.json());
        //app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }));

        const apikey = process.env.API_KEY;
        

//req.body

//app.get('/', function(req,res) {
  sgMail.setApiKey(apikey)
  
 // res.send({ title: 'GeeksforGeeks' });
  
//})

//function startfunction(){
 
//   app.get("/", (req, res) => {
//  // console.log("Dont gibbon.")
//     sgMail.setApiKey(apikey)
//   //This is the JSON
   const msg = {
//     //to: req.body.To,
//     //from: req.body.From, 
//     //subject: req.body.Subject,
//     //text: req.body.Message,
//     //html: req.body.Message,
     to: "xinabox307@digdy.com",
     from: "xinabox307@digdy.com",
     subject: "Message",
     text: "Hello. To all of those who are reading, I hope this test works. It has been many months, but I am sure that I will prevail.",
     html: '<h1>Hello. To all of those who are reading, I hope this test works. It has been many months, but I am sure that I will prevail.</h1>',
    

    };
//   console.log(msg)

   sgMail
     .send(msg)
     .then((response) => {
       console.log(response[0].statusCode);
       console.log(response[0].headers);
 console.log(msg)    })
     .catch((error) => {
       console.error(error);
     });

   // console.log(msg)
//})}

//startfunction();


 //app.get('/', (req, res) => {
  // })



  
//app.listen(PORT, () => {
  //console.log(`Server running on port ${PORT}`);
//})
//console.log(`${msg} is msg`)
//console.log(`${sgMail} is msg`)














 
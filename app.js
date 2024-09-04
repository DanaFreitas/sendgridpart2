import url from "node:url";
 import path from "node:path";
 import express from "./node_modules/express/index.js";
 import bodyParser from "./node_modules/body-parser/index.js";
 import sgMail from './node_modules/@sendgrid/mail/index.js';
 import process from 'node:process';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



app.use(function(req, res, next) {



  res.header("Access-Control-Allow-Origin", "www.sendgridtesting.uk");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)



const apikey = process.env.API_KEY;
const mail = process.env.mail;



app.use(express.static(path.join(__dirname)));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, import.meta.url));
  res.sendFile(path.join(__dirname, "index.html"));
  res.sendFile(path.join(__dirname, "sendgridpart2.css"));
  res.end();
});


 app.post("/", (req, res) => {
 sgMail.setApiKey(apikey)

 const msg = {
     to: mail,  
   from: mail, 
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
  console.log(msg)  
  console.log(`mail ${mail} is mail`)
  res.send('ok')
})
      .catch((error) => {
        console.error(error);
        res.send(error);

      });   
     res.redirect('/');



      });
 


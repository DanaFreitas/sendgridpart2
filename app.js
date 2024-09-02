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

const allowedOrigins = ["https://www.sendgridtesting.uk", "https://www.sendgridtesting.uk/submit"]


app.use(function(req, res, next) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {    res.header("Access-Control-Allow-Origin", origin);
  
  //res.header("Access-Control-Allow-Origin", "www.sendgridtesting.uk"); // update to match the domain you will make the request from
  //res.header("Access-Control-Allow-Origin": *)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  }next();
});

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)



const apikey = process.env.API_KEY;
const mail = process.env.mail;

  // sgMail.setApiKey(apikey)


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
     to: mail,  //req.body.To
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
  console.log(msg)    })
      .catch((error) => {
        console.error(error);
      });   
     res.redirect('/');



      });




 const PORT = process.env.PORT || 80; // Defining PORT
  

      app.listen(PORT, '0.0.0.0', (err) => {

        if (err) {
          console.error(`Failed to start server:', ${err}`);
          process.exit(1);
        }
       console.log(`Server running on port ${PORT}`);
       })
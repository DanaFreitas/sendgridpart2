
import url from "node:url";
import path from "path";
import { fileURLToPath } from "url";
  //Not sure why the value is never read. 
import express from "express";
import bodyParser from "body-parser";
import sgMail from '@sendgrid/mail';
import process from 'node:process';
import dotenv from 'dotenv';
dotenv.config();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = import.meta.filename;

//const PORT = 3000; // Defining PORT
  //This was for the localhost. 

const apikey = process.env.API_KEY;


const app = express();
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, import.meta.url));
  res.sendFile(path.join(__dirname, "index.html"));
  res.sendFile(path.join(__dirname, "sendgridpart2.css"));
  res.end();
});


app.post("/submit", (req, res) => {
console.log(`${apikey} is the apikey`)
  sgMail.setApiKey(apikey)

  
  const msg = {
    to: req.body.To,
    from: req.body.From, 
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
});

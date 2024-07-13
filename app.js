// //The good ones

import url from "node:url";
import path from "path";
import { fileURLToPath } from "url";
//does this not matter
import express from "express";
import bodyParser from "body-parser";
//import { MailService } from "@sendgrid/mail";
import sgMail from '@sendgrid/mail';
import process from 'node:process';
//import { loadEnvFile } from 'node:process';
//sgMail.setApiKey(process.env.API_KEY);
import dotenv from 'dotenv';
dotenv.config();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = import.meta.dirname;

//const PORT = 3000; // Defining PORT

//const sgMail = new MailService();

//sendgridClient.setApiKey(process.env.SENDGRID_API_KEY || "");
//doubt ill need
//process.
//loadEnvFile();
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

//app.listen(PORT, () => {
 //// console.log(`Server running on port ${PORT}`);
  
//});

app.post("/submit", (req, res) => {
console.log(`${apikey} is the apikey`)
  sgMail.setApiKey(apikey)

  //  sgMail.setApiKey(process.env.API_KEY);
  
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
});

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

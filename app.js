
// //The good ones






 //const http = require("http");
//const express = require("express");
//const path = require("node:path");
//const bodyParser = require('body-parser')
//app.use(bodyParser.json())

//import * as  path from 'path'
 //import {path} from './package.json';

//import {dirname} from 'path';
//import * as url from 'url';
import url from 'node:url';
//const path = require('node:path');
import path from 'path';
import {fileURLToPath} from 'url';
  //does this not matter
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = import.meta.dirname;



const PORT = 3000; // Defining PORT


import express from 'express'
import bodyParser from 'body-parser'

process.loadEnvFile()
//console.log(process.env.API_KEY)


const app = express();





app.use(bodyParser.urlencoded({ extended: true }))


 app.get('/', (req, res) => {
  
  
//app.use(express.static(path.join(__filename)))

//app.use(express.static(__dirname))

//console.log(__dirname)
   

 //  const indexpath = new URL('./index.html', import.meta.url)
 //  console.log(indexpath)
   //  const csspath = new URL('./sendgridpart2.css', import.meta.url)

   res.sendFile(path.join(__dirname, import.meta.url))

 res.sendFile(path.join(__dirname, 'index.html'))
res.sendFile(path.join(__dirname,  'sendgridpart2.css'))


  
  res.end();
});



 
   app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(__filename)
    console.log(__dirname)
      
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






import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

// creating an express object 
var app = express();

// get dirName from import.meta.url 
// use common js to make use of __dirname
var __dirname = dirname(import.meta.url);

// creating a server 
app.listen(3000,(error)=>{
    if(error)
        console.log(error);
    else
        console.log(`server is started !`);
});

// Making use of builtin middleware express.static
var staticMiddleware = app.use(express.static('webpage-code'));

// Instruction to handle get request


// home page 
app.get(
    `/`,
    (req,res)=>{
        res.sendFile(fileURLToPath(`${__dirname}/webpage-code/home.html`))
    }
)

// contacts page
app.get(
    `/contacts`,
    (req,res)=>{
        res.sendFile(fileURLToPath(`${__dirname}/webpage-code/contacts.html`))
    }
)

// profile page 
app.get(
    `/profile`,
    (req,res)=>{
        res.sendFile(fileURLToPath(`${__dirname}/webpage-code/profile.html`))
    }
)

// services page 
app.get(
    `/services`,
    (req,res)=>{
        res.sendFile(fileURLToPath(`${__dirname}/webpage-code/services.html`))
    }
)
let express = require('express');
let app = express();












// console.log("Hello World")


// app.get("/", (req, res) => res.send("Hello Express") )

app.get("/", (req, res) =>{
    // res.sendFile("./views/index.html", {root:"."}) // setting the root directory for the file which is current directory

    res.sendFile(__dirname + "/views/index.html");
} )













 module.exports = app;

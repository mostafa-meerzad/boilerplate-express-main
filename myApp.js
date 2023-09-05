require("dotenv").config();
let express = require("express");

const bodyParser = require("body-parser").urlencoded({extended:false});
let app = express();

// console.log("Hello World")

// app.get("/", (req, res) => res.send("Hello Express") )
app.use(bodyParser);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use("/public", express.static("./public"));

app.get("/", (req, res) => {
  // res.sendFile("./views/index.html", {root:"."}) // setting the root directory for the file which is current directory

  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  const msgStyle = process.env.MESSAGE_STYLE;
  const message = "Hello json";
  console.log(msgStyle);
  res.json({
    message: msgStyle === "uppercase" ? message.toUpperCase() : message,
  });
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

app.get("/name", (req, res) =>{
    res.json({name: `${req.query.first} ${req.query.last}`})
} )

app.post("/name", (req, res) =>{
    res.json({name: `${req.body.first} ${req.body.last}`})
    // return console.log(req.body)
} )
module.exports = app;

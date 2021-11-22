var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.post("/", (req, res) => {
  let main = req.body.main.toString();
  let sub = req.body.sub;
  if (main.includes(sub)) {
    res.send("strings are substring");
  } else {
    res.send("string are not a substring");
  }
});

app.listen(3000);
console.log("server started");

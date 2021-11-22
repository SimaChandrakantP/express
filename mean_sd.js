var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json());
app.post("/", (req, res) => {
  let isa1 = req.body.isa1;
  let isa2 = req.body.isa2;
  let assignment = req.body.assignment;
  let esa = req.body.esa;
  let meanValue = mean(isa1, isa2, assignment, esa);
  res.send(
    "Mean :" +
      meanValue.toString() +
      "\n" +
      "Standard Devation:" +
      standardDevation(isa1, isa2, assignment, esa, meanValue).toString()
  );
});
mean = (isa1, isa2, assignment, esa) => {
  let sum = isa1 + isa2 + assignment + esa;
  return sum / 4;
};
standardDevation = (isa1, isa2, assignment, esa, mean) => {
  isa1 -= mean;
  isa2 -= mean;
  assignment -= mean;
  esa -= mean;
  isa1 *= isa1;
  isa2 *= isa2;
  assignment *= assignment;
  esa *= esa;
  sum = (isa1 + isa2 + assignment + esa) / 4;
  return Math.sqrt(sum);
};
app.listen(3000);
console.log("server started");

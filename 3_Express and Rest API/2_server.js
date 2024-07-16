const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to our Hotel... How can i help you?");
});

app.get("/chicken", (req, res) => {
  res.send("Okay Sir Your Order for Chicken is Confirmed.");
});

app.get("/idli", (req, res) => {
  let customised_idli ={
    name:"Rawa Idli",
    size:"5cm radii",
    is_sambhar: false
  }
  res.send(customised_idli);
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});

const express = require("express");
const app = express();
const db = require("./1_db");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Welcome to Our Hotel");
});

// Import the router files
const personRoutes = require("../5_Routes/personRoutes");
const menuRoutes = require('../5_Routes/menuRoutes');


// Use the routers
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(PORT, () => {
  console.log("Listening on Port 3000");
});


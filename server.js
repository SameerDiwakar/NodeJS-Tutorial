const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
const passport = require("./auth");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Middleware Function
const logRequest = (req, res, next) => {
  console.log(
    // `[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`
  );
  next();
};

app.use(logRequest);

app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate("local", { session: false });

app.get("/", function (req, res) {
  res.send("Welcome to Our Hotel");
});

// Import the router files
const personRoutes = require("./Routes/personRoutes");
const menuRoutes = require("./Routes/menuRoutes");
const { jwtAuthMiddleware } = require("./jwt");

// Use the routers
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

app.listen(PORT, () => {
  console.log("Listening on Port 3000");
});

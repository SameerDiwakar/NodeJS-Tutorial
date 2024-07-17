const mongoose = require("mongoose");
require('dotenv').config();

// Define the MongoDB connection URL
// const mongoURL = process.env.LOCAL_DB_URL; //Local Database
const mongoURL =process.env.DB_URL;  //MongoDB Atlas Online Database

// Set up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Access the Default Connection Object
const db = mongoose.connection;

// Define Event listener for database connection
db.on("connected", () => {
  console.log("Connected to MongoDB Server");
});
db.on("error", (err) => {
  console.log("MongoDB Connection Error", err);
});
db.on("disconnected", () => {
  console.log("MongoDB Disconnnected");
});

// Export the Database Connection
module.exports = db;

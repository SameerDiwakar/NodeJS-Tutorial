const mongoose = require("mongoose");

// Define the MongoDB connection URL
// const mongoURL = "mongodb://localhost:27017/hotels"; //Local Database
const mongoURL ="mongodb+srv://diwakarsameer27:qwerty1234@hotel.fge5snc.mongodb.net/";  //MongoDB Atlas Online Database

// Set up MongoDB connectionet
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

// Write the code to create a simple Express.js route that responds with "Hello, World!" when a user visits the
// root URL ("/").

const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const studentRoutes = require('./routes/studentRoutes')

app.use('/student',studentRoutes);
app.listen(4000, () => {
    console.log("Listening on Port 4000");
  });
  
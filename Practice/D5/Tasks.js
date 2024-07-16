// Design the Mongoose schema for a "Task" with fields for "title," "description," "priority," and "dueDate."

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
},
description: {
    type: String
},
priority: {
    type: Number,
    required: true,
  },
dueDate:{
    type: String
}

});

const task = mongoose.model('Tasks', taskSchema);

module.exports = task;

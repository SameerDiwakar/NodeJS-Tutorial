/* You're building a simple task management application. Your task is to create a POST API endpoint for adding new tasks to the database. Assume you've already set up an Express application and connected it to your MongoDB using Mongoose.
a) Design the Mongoose schema for a "Task" with fields for "title," 
"description," "priority," and "dueDate."
b) Create a POST API endpoint /api/tasks that allow clients to submit new tasks to the database. Ensure ithandles request validation and responds with the newly created task. */

app.post("/api/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

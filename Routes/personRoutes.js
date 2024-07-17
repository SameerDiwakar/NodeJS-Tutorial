const express = require("express");
const router = express.Router();

const Person = require("./person");
// Post route to add a person

router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assunming the request body contains the person data
    // Create a new person document using the Mongoose model
    const newPerson = new Person(data);
    // Save new person to the database
    const response = await newPerson.save();
    console.log("Data Saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }

  // Old Method

  // const data = req.body; //Assunming the request body contains the person data
  // // Create a new person document using the Mongoose model
  // const newPerson = new Person(data);
  // // Save new person to the database
  // newPerson.save((error, savedPerson) => {
  //   if (error) {
  //     console.log("Error saving person:", error);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   } else {
  //     console.log("Data Saved Successfully");
  //     res.status(200).json(savedPerson);
  //   }
  // });
});

// Get Method to get the person
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data Fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    //Extracting the work type from the URL parameter
    const workType = req.params.workType;
    if (
      workType === "chef" ||
      workType === "waiter" ||
      workType === "manager"
    ) {
      const response = await Person.find({ work: workType });
      console.log("Response Fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Work Type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Updating Data using Put
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // Extract the person's ID from the URL parameter
    const updatedPersonData = req.body; // Updated data for the person

    // Assuming you have a Person model
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
      }
    );
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    // Send the updated person data as a JSON response
    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.error("Error updating person:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Deleting data using Delete Method

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // Extract the person's ID from the URL parameter

    // Assuming you have a Person model
    const deletedPerson = await Person.findByIdAndDelete(personId);
    if (!deletedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data deleted");

    // Send a success message as a JSON response
    res.json({ message: "Person deleted successfully" });
  } catch (error) {
    console.error("Error deleting person:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

const MenuItem = require("./MenuItem");

router.post("/", async (req, res) => {
  try {
    const mdata = req.body;
    const newItem = new MenuItem(mdata);
    const response = await newItem.save();
    console.log("Item Saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.get("/", async (req, res) => {
    try {
      const mdata = await MenuItem.find();
      console.log("mdata Fetched");
      res.status(200).json(mdata);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  
  module.exports = router;
// Create a POST method API to store data or menu items as per the schema we discussed ( /menu )

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json())


const MenuItem = require("./MenuItem");

app.post("/menu", async (req, res) => {
  try {
    const data = req.body;
    const newItem = new MenuItem(data);
    const response = await newItem.save();
    console.log("Item Saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

// Create a GET method API to List down the All Menu Items as per the schema we discussed ( /menu )


app.get("/menu", async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("Data Fetched");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  app.listen(3000, () => {
    console.log("Listening on Port 3000");
  });











const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to Hello World Gemini");
});

app.listen(5000, () => {
  console.log("Server is Running on port 5000");
});

// const prompt = "Can provide a image thru multer to gemini api in node js";


const generate =async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        return result.response.text();
    } catch (error) {
        console.log(error);
    }
}

app.get('/api/content',async (req,res)=>{
  try {
    const data =req.body.question;
    const result = await generate(data);
    res.send({
      "result": result
    })
  } catch (error) {
    res.send("error"+ err);
  }
})
// generate();

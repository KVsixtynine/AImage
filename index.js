// index.js
const express = require("express");
const cors = require('cors'); // Import CORS for handling cross-origin requests

const { Client } = require("@gradio/client"); // Use require for @gradio/client

const app = express();

app.use(cors()); // Enable CORS for all routes

app.get("/", (req, res) => {
  res.send("Express on Vercel with Gradio Client");
});

app.get("/gradio/:modelUrl", async (req, res) => {
  try {
    const modelUrl = req.params.modelUrl;

    // Connect to the Gradio model
    const client = new Client(modelUrl);

    // Get model information (optional, but useful for debugging)
    const modelInfo = await client.predict("/info");
    console.log("Model Information:", modelInfo);

    // Example usage: Get a prediction from the Gradio model
    const result = await client.predict("/predict", { 
      // Replace with the actual inputs your model expects
      input: "your_input_here" 
    });
    console.log("Prediction Result:", result);
    res.json(result); 

  } catch (error) {
    console.error("Error using Gradio client:", error);
    res.status(500).send("Error using Gradio client");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 

// index.js
const express = require("express");
const cors = require('cors'); // Import CORS for handling cross-origin requests

const { Client } = require("@gradio/client"); // Use require for @gradio/client

const app = express();

app.use(cors()); // Enable CORS for all routes

app.get("/", (req, res) => {
  res.send("Express on Vercel with Gradio Client");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 




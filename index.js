import express from "express";
import { Client } from "@gradio/client";

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; // Export the Express app

import express from "express";
import { Client } from "@gradio/client";

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

const PORT = process.env.PORT || 5000;

async function connectToClient() {
  const client = await Client.connect("prithivMLmods/DALLE-4K");
  const result = await client.predict("/run", {
    prompt: "Hello!!",
    negative_prompt: "Hello!!",
    use_negative_prompt: true,
    style: "3840 x 2160",
    seed: 0,
    width: 512,
    height: 512,
    guidance_scale: 0.1,
    randomize_seed: true,
  });
  console.log(result.data);
}

connectToClient().catch(error => {
  console.error(error);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; // Export the Express app

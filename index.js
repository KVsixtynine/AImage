/*

// index.js
const express = require("express");

const app = express();



app.get("/", (req, res) => {
  res.send("Express on Vercel with Gradio Client");
});
app.use("/ping", (req,res) => {
  res.send("Ping!");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 


async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/alvdansen/BandW-Manga",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}
query({"inputs": "Astronaut riding a horse"}).then((response) => {
	console.log(response);
});


*/




const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

// Image Generation Function
async function query(data, filename = "generated_image.png") {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
    {
      headers: { Authorization: "Bearer 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" }, // Replace if needed
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Request failed with status ${response.status}: ${errorText}`
    );
  }

  const result = await response.blob();

  return result; 
}

// API Endpoint
app.get('/generate/:prompt', async (req, res) => {
    const prompt = req.params.prompt + Math.floor(Math.random() * 1000); // Get prompt from URL parameters

    try {
        const result = await query({ inputs: prompt });
	console.log(result);
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).send('Error generating image');
    }
});



// Used to keep this awake
app.use('/myping', (req, res) => {
  res.send('Ping!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

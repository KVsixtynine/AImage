

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

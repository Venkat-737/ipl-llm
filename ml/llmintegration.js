const axios = require('axios');
require('dotenv').config();

const token = process.env.GITHUB_TOKEN;  // Ensure this is set correctly in your .env file
const endpoint = "https://models.inference.ai.azure.com/v1/chat/completions";
const modelName = "Mistral-large-2407";

async function main() {
  try {
    const response = await axios.post(
      endpoint,
      {
        model: modelName,
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: "What is the capital of France?" }
        ],
        temperature: 1.0,
        max_tokens: 1000,
        top_p: 1.0
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Tpe': 'application/json'
        }
      }
    );

    console.log(response.data.choices[0].message.content);
  } catch (err) {
    console.error("An error occurred:", err.response ? err.response.data : err.message);
  }
}

main();

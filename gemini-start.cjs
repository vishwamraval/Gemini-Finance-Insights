const { GoogleGenerativeAI } = require("@google/generative-ai");

require('dotenv').config({ path: '.env' });
const API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL });
async function run() {
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello, I have 4 dogs and 2 cats." }],
        },
        {
          role: "model",
          parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
      },
    });
    
    const msg = "How many pets do I have?"
    const result = await chat.sendMessageStream(msg);
  
    let text = '';
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      text += chunkText;
    }
  }
  
  run();
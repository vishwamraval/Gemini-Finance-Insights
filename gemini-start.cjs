const { GoogleGenerativeAI } = require("@google/generative-ai");

require('dotenv').config({ path: '.env' });
const API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ 
  model: process.env.GEMINI_MODEL, 
  systemInstruction:"You are a financial advisor. Your name is Sage.",
});
async function run() {
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello, I an an Investor. I am looking for some advice." }],
        },
        {
          role: "model",
          parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
      ],
    });
    
    const prompt = "What is your name?";
    getGeminiResponse(prompt).then((response) => {
      console.log(response);
    });  
  }
  
  run();

  async function getGeminiResponse(prompt) {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  }
  
  // FINNHUB API
  const finnhub = require('finnhub');
  const finnhub_api_key = finnhub.ApiClient.instance.authentications['api_key'];
  finnhub_api_key.apiKey = process.env.FINNHUB_API_KEY;
  const finnhubClient = new finnhub.DefaultApi();
  
    async function getFinnhubQuote(symbol) {
      finnhubClient.quote(symbol, (error, data, response) => {
        // print PC
        console.log(data.c);
        if (error) {
          console.error(error);
        }
      });
    }

    // Function calling Gemini API
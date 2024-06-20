const { GoogleGenerativeAI } = require("@google/generative-ai");

require('dotenv').config({ path: '.env.local' });
const API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
async function run() {
const prompt = "Why is the sky blue?";
const result = await model.generateContent(prompt);
const response = await result.response;
const text = response.text();
console.log(text);
}

run();
import { router } from "../main.tsx";
export default function Home() {
  return (
    <div>
      <img
        src="/src/assets/Google_Gemini_Logo.svg"
        alt="Gemini Finance Insights"
      />
      <h1>Welcome to Gemini Finance Insights</h1>
      <p>Explore the power of AI in finance</p>
      <p>
        Get the latest insights on financial markets, stocks, and more with AI
        powered analysis and predictions.
      </p>
      <button onClick={() => router.navigate("/login")}>Get Started</button>
    </div>
  );
}

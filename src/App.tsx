import { router } from "./main.tsx";
import Navbar from "./components/navbar.tsx";
function App() {
  return (
    <div className="bg-primary text-white text-center w-full h-full">
      <Navbar />
      <img
        src="/src/assets/Google_Gemini_Logo.svg"
        alt="Gemini Finance Insights"
        className="h-25 mx-auto mt-8 p-4"
      />
      <h1>Welcome to Gemini Finance Insights</h1>
      <p className="center">
        Get the latest insights on financial markets, stocks, and more with AI
        powered analysis and predictions.
      </p>
      <button
        onClick={() => router.navigate("/login")}
        className="bg-secondary text-text_primary p-2 rounded-lg hover:bg-accent hover:text-accent_light duration-300 px-5 mt-4"
      >
        Get Started
      </button>
    </div>
  );
}

export default App;

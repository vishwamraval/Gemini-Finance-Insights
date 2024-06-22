import { router } from "./main.tsx";
import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer.tsx";
// import Chatbox from "./components/chatbox.tsx";
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
        className="bg-secondary text-text_primary p-2 rounded-lg hover:bg-accent duration-300 px-5 mt-4"
      >
        Get Started
      </button>
      <div className="px-4">
        <h2 className="text-center text-2xl p-4 mt-8 bg-accent shadow-md px-4">
          Features
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-secondary p-4 rounded-lg">
          <h3>Stock Analysis</h3>
          <p>Get detailed analysis on your favorite stocks and companies</p>
          <img
            src="/src/assets/up_stock.png"
            alt="Stock Analysis"
            className="flex"
          />
        </div>
        <div className="bg-secondary p-4 rounded-lg">
          <h3>Market Predictions</h3>
          <p>Get the latest predictions on market trends</p>
          <div className="center">
            <img
              src="/src/assets/bull_bear.png"
              alt="Market Predictions"
              className="flex"
            />
          </div>
        </div>
        <div className="bg-secondary p-4 rounded-lg">
          <h3>Portfolio Management</h3>
          <p>Manage your portfolio with ease</p>
          <div className="center">
            <img
              src="/src/assets/SignedOutKeyMetrics.webp"
              alt="Portfolio Management"
              className="flex"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-8 bg-accent">
        <h2 className="text-center text-2xl p-4">About Us</h2>
        {/* <Chatbox /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;

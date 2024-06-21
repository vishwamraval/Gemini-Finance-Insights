// Navbar.tsx

import { router } from "../main.tsx";

export default function Navbar() {
  return (
    <div className="p-3 shadow-md flex justify-between bg-primary text-accent_light flex-row w-full">
      <div>
        <img
          src="/src/assets/Google_Gemini_Logo.svg"
          alt="Gemini Finance Insights"
          className="h-12"
        />
      </div>
      <div>
        <button
          className="text-text_primary hover:text-accent_light duration-300 px-5"
          onClick={() => router.navigate("/login")}
        >
          About
        </button>
        <button
          className="text-text_primary hover:text-accent_light duration-300 px-5"
          onClick={() => router.navigate("/login")}
        >
          Try it now
        </button>
        <button
          className="bg-secondary text-text_primary p-2 rounded-lg hover:bg-accent hover:text-accent_light duration-300 px-5"
          onClick={() => router.navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

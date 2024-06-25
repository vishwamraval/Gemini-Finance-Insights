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
      <div className="flex space-x-4">
        <button
          className="text-text_primary duration-300 px-6 py-3 hover:bg-accent hover:text-white rounded-lg"
          onClick={() => router.navigate("/about")}
        >
          About
        </button>
        <button
          className="text-text_primary duration-300 px-6 py-3 hover:bg-accent hover:text-white rounded-lg"
          onClick={() => router.navigate("/login")}
        >
          Try it now
        </button>
        <button
          className="bg-secondary text-text_primary px-6 py-3 rounded-lg hover:bg-accent hover:text-white duration-300"
          onClick={() => router.navigate("/register")}
        >
          Register
        </button>
        <button
          className="bg-secondary text-text_primary px-6 py-3 rounded-lg hover:bg-accent hover:text-white duration-300"
          onClick={() => router.navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

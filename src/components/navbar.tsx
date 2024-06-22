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
          className="text-text_primary duration-300 px-5 hover:bg-accent rounded-lg"
          onClick={() => router.navigate("/about")}
        >
          About
        </button>
        <button
          className="text-text_primary duration-300 px-5 hover:bg-accent rounded-lg"
          onClick={() => router.navigate("/login")}
        >
          Try it now
        </button>
        <button
          className="bg-secondary text-text_primary px-5 rounded-lg hover:bg-accent duration-300 px-5 mt-4"
          onClick={() => router.navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

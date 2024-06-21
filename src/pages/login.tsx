// Login page
import { router } from "../main.tsx";
export default function Login() {
  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">
          {" "}
          Login{" "}
        </h1>
        <div className="mb-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => {
            console.log("Login button clicked");
            // route to dashboard
            router.navigate("/dashboard");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

// Password Reset Page
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

export default function PasswordReset() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = () => {
    sendPasswordResetEmail(getAuth(), email)
      .then(() => {
        setMessage("Password reset email sent");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="bg-accent_light p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-text_primary">
          Password Reset
        </h1>
        <div className="mb-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-accent text-white p-3 rounded-lg hover:accent_light transition-colors"
          onClick={handleReset}
        >
          Reset Password
        </button>
        {message && <p className="text-red-500 text-sm mt-2">{message}</p>}
      </div>
    </div>
  );
}

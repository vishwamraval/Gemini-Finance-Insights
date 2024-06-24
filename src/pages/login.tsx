// Login page
import { useState } from "react";
import { router } from "../main.tsx";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="bg-accent_light p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-text_primary">
          {" "}
          Login{" "}
        </h1>
        <div className="mb-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            type="email"
            value={formValues.email}
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            type="password"
            value={formValues.password}
          />
        </div>
        <button
          className="w-full bg-accent text-white p-3 rounded-lg hover:accent_light transition-colors"
          onClick={() => {
            console.log("Login button clicked");
            // Validate email and password
            loginUser(formValues.email, formValues.password);
            // route to dashboard
            router.navigate("/dashboard");
          }}
        >
          Login
        </button>
        <p className="text-center mt-4 text-text_primary">
          Don't have an account?{" "}
          <span
            className="text-text_primary cursor-pointer weight-bold hover:underline decoration-dotted	"
            onClick={() => {
              // route to register
              router.navigate("/register");
            }}
          >
            Register
          </span>
        </p>
        <button
          className="w-full bg-accent text-white p-3 rounded-lg hover:accent_light transition-colors mt-4"
          onClick={loginWithGoogle}
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
}

async function loginWithGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    // route to dashboard
    if (result.user) {
      router.navigate("/dashboard");
    }
  } catch (error) {
    console.error(error);
  }
}

// Check if the email, password exist in firebase
async function loginUser(email: string, password: string) {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    // route to dashboard
    router.navigate("/dashboard");
  } catch (error) {
    console.error(error);
  }
}

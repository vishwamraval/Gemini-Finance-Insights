// Register user page
import { useState } from "react";
import { router } from "../main.tsx";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

export default function Register() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTnc: false,
  });

  const handleChange = (e: {
    target: { name: any; value: any; type: any; checked: any };
  }) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegister = () => {
    console.log("Register button clicked");

    // Validate form values here if needed
    if (formValues.password !== formValues.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    // Register the user
    registerUser(
      formValues.email,
      formValues.password,
      formValues.firstName,
      formValues.lastName
    );

    // Route to login
    router.navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="bg-accent_light p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-text_primary">
          Register
        </h1>
        {/* First Name */}
        <div className="flex mb-4">
          <div className="mr-2">
            <label
              htmlFor="first_name"
              className="text-text_primary font-semibold mb-2 block"
            >
              First Name
            </label>
            <input
              name="firstName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="First Name"
              type="text"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          {/* Last Name */}
          <div>
            <label
              htmlFor="last_name"
              className="text-text_primary font-semibold mb-2 block"
            >
              Last Name
            </label>
            <input
              name="lastName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Last Name"
              type="text"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <label
          htmlFor="email"
          className="text-text_primary font-semibold mb-2 block"
        >
          Email
        </label>
        <div className="mb-4">
          <input
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        {/* Password */}
        <label
          htmlFor="password"
          className="text-text_primary font-semibold mb-2 block"
        >
          Password
        </label>
        <div className="mb-4">
          <input
            name="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        {/* Confirm Password */}
        <label
          htmlFor="confirm_password"
          className="text-text_primary font-semibold mb-2 block"
        >
          Confirm Password
        </label>
        <div className="mb-4">
          <input
            name="confirmPassword"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            type="password"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {/* Accept T&C */}
        <div className="flex items-center mb-4">
          <input
            name="acceptTnc"
            id="link-checkbox"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={formValues.acceptTnc}
            onChange={handleChange}
          />
          <label
            htmlFor="link-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a href="#" className="text-text_primary dark hover:underline">
              Terms and Conditions
            </a>
            .
          </label>
        </div>
        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-accent text-white p-3 rounded-lg hover:accent_light transition-colors"
        >
          Register
        </button>
      </div>
    </div>
  );
}

async function registerUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Update user profile with first name and last name
    const currentUser = auth.currentUser;
    if (currentUser !== null) {
      await updateProfile(currentUser, {
        displayName: `${firstName} ${lastName}`,
      });
    }

    // Send email verification
    sendEmailVerification(user);
    console.log("Email verification sent");

    console.log(user);
    console.log("User registered successfully");
    console.log("Display Name: ", user.displayName);
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(
      `Registration failed with error code ${errorCode}: ${errorMessage}`
    );
  }
}

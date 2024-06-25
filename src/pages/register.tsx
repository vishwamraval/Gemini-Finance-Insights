// Register user page
import { useState } from "react";
import { router } from "../main.tsx";
import Modal from "@mui/material/Modal";
import Terms from "../components/terms.tsx";
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

  const [isModalOpen, setIsModalOpen] = useState(false);

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
    // check if form is valid
    if (!formValues.acceptTnc) {
      console.error("Please accept the terms and conditions");
      return;
    }
    if (
      formValues.email === "" ||
      formValues.password === "" ||
      formValues.firstName === "" ||
      formValues.lastName === ""
    ) {
      console.error("Please fill in all fields");
      return;
    }
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <div className="flex items-center mb-4 px-1">
          <input
            name="acceptTnc"
            id="link-checkbox"
            type="checkbox"
            className="w-5 h-5 rounded border border-gray-300 checked:bg-primary checked:border-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:checked:bg-primary dark:focus:ring-offset-gray-800 dark:focus:ring-primary"
            checked={formValues.acceptTnc}
            onChange={handleChange}
          />

          <label
            htmlFor="link-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <span
              className="text-text_primary cursor-pointer 
            weight-bold hover:underline decoration-dotted
            "
              onClick={openModal}
            >
              {"Terms and Conditions"}
            </span>
            <Modal
              open={isModalOpen}
              onClose={closeModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
            >
              <Terms />
            </Modal>
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

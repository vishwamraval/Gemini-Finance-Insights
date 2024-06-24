// Register user page
import { useState } from "react";
import { router } from "../main.tsx";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    registerUser(formValues.email, formValues.password);

    // Route to login
    router.navigate("/login");
  };

  return (
    <div>
      <h1>Register</h1>
      {/* First Name */}
      <label htmlFor="first_name">First Name</label>
      <input
        type="text"
        id="first_name"
        name="firstName"
        placeholder="First Name"
        value={formValues.firstName}
        onChange={handleChange}
      />
      {/* Last Name */}
      <label htmlFor="last_name">Last Name</label>
      <input
        type="text"
        id="last_name"
        name="lastName"
        placeholder="Last Name"
        value={formValues.lastName}
        onChange={handleChange}
      />
      {/* Email */}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={formValues.email}
        onChange={handleChange}
      />
      {/* Password */}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        value={formValues.password}
        onChange={handleChange}
      />
      {/* Confirm Password */}
      <label htmlFor="confirm_password">Confirm Password</label>
      <input
        type="password"
        id="confirm_password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formValues.confirmPassword}
        onChange={handleChange}
      />
      {/* Accept T&C */}
      <label htmlFor="accept_tnc">Accept Terms & Conditons</label>
      <input
        type="checkbox"
        id="accept_tnc"
        name="acceptTnc"
        checked={formValues.acceptTnc}
        onChange={handleChange}
      />
      {/* Register Button */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

async function registerUser(email: string, password: string) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // Save first name, last name, etc. to user profile

      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      if (errorCode === "auth/email-already-in-use") {
        console.error("Email already in use");
      } else {
        console.error(errorMessage);
      }
    });
}

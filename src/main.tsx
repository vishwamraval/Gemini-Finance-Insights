import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Dashboard from "./pages/dashboard.tsx";
import Register from "./pages/register.tsx";
import Login from "./pages/login.tsx";
import NotFound from "./pages/404_not_found.tsx";
import About from "./pages/about_us.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBnX00fDg7p1QyoH8uIcsIv3IVCkZSNvXc",
  authDomain: "gen-lang-client-0456590828.firebaseapp.com",
  projectId: "gen-lang-client-0456590828",
  storageBucket: "gen-lang-client-0456590828.appspot.com",
  messagingSenderId: "314003320878",
  appId: "1:314003320878:web:be2a15269c610219df2fbf",
  measurementId: "G-RJJM3K294D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export { router };

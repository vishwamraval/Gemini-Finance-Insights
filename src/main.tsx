import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./pages/home.tsx";
import Dashboard from "./pages/dashboard.tsx";
import Login from "./pages/login.tsx";
import NotFound from "./pages/404_not_found.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
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

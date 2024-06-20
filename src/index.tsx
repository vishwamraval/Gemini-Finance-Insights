// React Router
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Routes } from "react-router";

import Home from "./pages/home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

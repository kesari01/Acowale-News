import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing components and pages
import "./App.css";
import Layout from "./assets/layout/Layout";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  return (
    <div>
      {/* BrowserRouter component to handle routing */}
      <BrowserRouter>
        <Routes>
          {/* Layout component wraps around all routes to provide consistent layout */}
          <Route path="/" element={<Layout />}>
            {/* Define routes for different pages */}
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

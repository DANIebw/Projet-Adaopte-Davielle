// import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Layout/Navbar.tsx";
import HomePage from "./pages/HomePage";
import AdaoptPage from "./pages/AdaoptPage";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animals" element={<AdaoptPage />} />
      </Routes>
    </>
  );
}

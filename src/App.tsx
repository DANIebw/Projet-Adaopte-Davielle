import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Layout/Navbar.tsx";
import Footer from "./Components/Layout/Footer.tsx";
import HomePage from "./pages/HomePage";
import AdaoptPage from "./pages/AdaoptPage";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animals" element={<AdaoptPage />} />
      </Routes>
      <Footer />
    </>
  );
}

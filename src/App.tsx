import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Layout/Navbar.tsx";
import Footer from "./Components/Layout/Footer.tsx";
import HomePage from "./pages/HomePage";
import Animals from "./pages/Animals";
import FiltersBar from "./adopt/FiltersBar.tsx";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animals" element={<Animals />} />
      </Routes>
      <Footer />
    </>
  );
}

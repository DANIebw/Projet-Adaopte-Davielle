import { createBrowserRouter } from "react-router-dom";
import NavBar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import HomePage from "./pages/HomePage";
import AdaoptPage from "./pages/AdaoptPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/animals",
    element: (
      <>
        <NavBar />
        <AdaoptPage />
        <Footer />
      </>
    ),
  },
]);

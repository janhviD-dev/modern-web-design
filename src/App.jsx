import "./App.css";
import { Routes, Route } from "react-router";

import Navbar from "./Components/Navbar";
import Section1 from "./Pages/Section1";
import OfferPage from "./Components/OfferPage";
import GalleryPage from "./Pages/GalleryPage";
import BlogPage from "./Pages/BlogPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Pages/Footer";
import CursorFollower from "./Components/CursorFollower";
function App() {
  
  return (
    <>
      <Navbar />
      <CursorFollower/>
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/offer" element={<OfferPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Portfolio/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
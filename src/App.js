import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans mx-auto md:mx-20 py-16 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";


import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-sans mx-auto md:mx-20 py-16 h-screen">
      <Home />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Share from "./components/Share";
import Header from "./components/Header";
import Links from "./components/Links";
import Brands from "./components/Brands";
import { info } from "./data";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans mx-auto py-16 h-screen">
      <main className="px-8 flex flex-col justify-center items-center relative">
        <Share />
        <Header />
        {info.map((data) => (
          <Links key={data.id} id={data.id} link={data.link} name={data.name} />
        ))}
        <Brands />
      </main>
      <Footer />
    </div>
  );
};

export default App;

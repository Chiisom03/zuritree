import { info } from "../data";
import React from "react";
import Brands from "../components/Brands";
import Header from "../components/Header";
import Links from "../components/Links";
import Share from "../components/Share";

const Home = () => {
  return (
    <main className="px-8 flex flex-col justify-center items-center relative">
      <Share />
      <Header />
      {info.map((data) => (
        <Links key={data.id} id={data.id} link={data.link} name={data.name} />
      ))}
      <Brands />
    </main>
  );
};

export default Home;

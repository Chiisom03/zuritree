import React from "react";
import zuri from "../assets/images/zuri.png";
import ingressive from "../assets/images/ingressive.png";

const Footer = () => {
  return (
    <footer className="w-full h-40">
      <div className="md:mx-20 md:flex md:justify-between mt-12 border-t border-t-zuri-gray-200 py-12 mx-4">
        <img
          src={zuri}
          alt="zuri-internship"
          className="
           w-[138.77px]
           h-[18.55px] md:h-[24.74px] md:w-[185.03px] mb-4 md:mb-0"
        />
        <p className="text-[14px] md:text-xs mb-4 md:mb-0">
          HNG Internship 9 Frontend Task
        </p>
        <img
          src={ingressive}
          alt="zuri-internship"
          className="h-[24px] w-[99.1px] md:h-[32px] md:w-[132.13px]"
        />
      </div>
    </footer>
  );
};

export default Footer;

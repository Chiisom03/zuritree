import React from "react";
import slack from "./assets/svgs/slack.svg";
import github from "./assets/svgs/github.svg";
import zuri from "./assets/images/zuri.png";
import ingressive from "./assets/images/ingressive.png";
import { info } from "./data";

const App = () => {
  return (
    <div className="font-sans mx-auto py-16 h-screen">
      <main className="px-8 flex flex-col justify-center items-center ">
        <div className="mb-14 flex flex-col justify-center items-center ">
          <a href="https://github.com/Chiisom03">
            <img
              className="object-cover bg-no-repeat h-[88px] w-[88px] rounded-full mb-6"
              src="https://pbs.twimg.com/profile_images/1548036397503721473/EiDxIeTt_400x400.jpg"
              alt="chiisom"
            />
          </a>
          <p className="font-bold text-[18px] md:text-xl">Peter Nwibo</p>
        </div>
        {info.map((link, id) => (
          <a
            key={id}
            className="mb-6 py-6 px-8 h-[68px] w-[343px] lg:w-[1152px] lg:h-[72px] bg-zuri-gray-200 rounded-lg font-medium hover:bg-zuri-gray-300 text-center text-[14px] md:text-[18px]"
            target="blank"
            href={link.link}
          >
            {link.name}
          </a>
        ))}
        <div className="flex items-center">
          <img className="h-6 w-6 mr-[26px]" src={slack} alt="slack-logo" />
          <img className="h-6 w-6" src={github} alt="github-icon" />
        </div>
      </main>
      <footer className="w-full h-40">
        <div className="md:mx-20 md:flex md:justify-between mt-12 border-t py-12 mx-4">
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
    </div>
  );
};

export default App;

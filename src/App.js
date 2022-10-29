import React from "react";
import share from "./assets/images/share-icon.png";
import dots from "./assets/images/dots.png";
import slack from "./assets/svgs/slack.svg";
import github from "./assets/svgs/github.svg";
import zuri from "./assets/images/zuri.png";
import ingressive from "./assets/images/ingressive.png";
import { info } from "./data";

const App = () => {
  return (
    <div className="font-sans mx-auto py-16 h-screen">
      <main className="px-8 flex flex-col justify-center items-center relative">
        <a
          href="/"
          className="h-10 w-10 rounded-full border border-dashed border-zuri-gray-300 absolute -top-5 right-4 md:right-52 hover:bg-zuri-gray-200 grid place-items-center"
        >
          <img
            className="hidden md:block w-[15.19px] h-[14.02px]"
            src={share}
            alt="share-icon"
          />
          <img
            className="md:hidden w-[13.33px] h-[3.67px]"
            src={dots}
            alt="share-icon"
          />
        </a>
        <div className="mb-14 flex flex-col justify-center items-center ">
          <img
            id="profile_img"
            className="object-cover bg-no-repeat h-[88px] w-[88px] rounded-full mb-6"
            src="https://pbs.twimg.com/profile_images/1586201750695968770/KdBc6YZQ_400x400.jpg"
            alt="chiisom"
          />
          <p id="twitter" className="font-bold text-[18px] md:text-xl">
            Peter Nwibo
          </p>
          <p id="slack" className="hidden font-bold text-[18px] md:text-xl">
            Peter Nwibo
          </p>
        </div>
        {info.map((link) => (
          <a
            key={link.id}
            className="mb-6 py-6 px-8 h-[68px] w-[343px] lg:w-[1152px] lg:h-[72px] bg-zuri-gray-200 rounded-lg font-medium hover:bg-zuri-gray-300 text-center text-[14px] md:text-[18px] outline-none focus:ring-[1px] focus:ring-zuri-gray focus:bg-zuri-gray-200"
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
    </div>
  );
};

export default App;

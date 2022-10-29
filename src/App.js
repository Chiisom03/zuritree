import React from "react";
import slack from "./assets/svgs/slack.svg";
import github from "./assets/svgs/github.svg";
import { info } from "./data";

const App = () => {
  return (
    <div className="font-sans mx-auto py-16  h-screen">
      <main className="px-8 flex flex-col justify-center items-center ">
        <div className="mb-14 flex flex-col justify-center items-center ">
          <img
            className="object-cover bg-no-repeat h-[88px] w-[88px] rounded-full mb-6"
            src="https://pbs.twimg.com/profile_images/1548036397503721473/EiDxIeTt_400x400.jpg"
            alt="chiisom"
          />
          <p className="font-bold">Peter Nwibo</p>
        </div>
        {info.map((link, id) => (
          <a
            key={id}
            className="mb-6 py-6 px-8 h-[68px] w-[343px] lg:w-[1152px] lg:h-[72px] bg-zuri-gray-200 rounded-lg font-medium hover:bg-zuri-gray-300 text-center"
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
      <footer></footer>
    </div>
  );
};

export default App;

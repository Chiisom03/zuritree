import React from "react";
import user from "./assets/user.png";
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
            src={user}
            alt="Peter"
          />
          <p className="font-bold">Peter Jackson</p>
        </div>
      </main>
    </div>
  );
};

export default App;

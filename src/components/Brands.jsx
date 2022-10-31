import React from "react";
import slack from "../assets/svgs/slack.svg";
import github from "../assets/svgs/github.svg";

const Brands = () => {
  return (
    <div className="flex items-center">
      <img className="h-6 w-6 mr-[26px]" src={slack} alt="slack-logo" />
      <img className="h-6 w-6" src={github} alt="github-icon" />
    </div>
  );
};

export default Brands;

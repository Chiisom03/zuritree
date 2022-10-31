import React from "react";
import share from "../assets/images/share-icon.png";
import dots from "../assets/images/dots.png";

const Share = (title, text, url) => {

  const details = { text, title, url };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(details);
      } catch (error) {
        console.log(`Oops! ${error}, try again`);
      }
    } else {
      alert("your browser doesn't support sharing");
    }
  };

  return (
    <div
      onClick={() => handleShare()}
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
    </div>
  );
};

export default Share;

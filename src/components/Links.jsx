import React from "react";

const Links = ({ id, link, name }) => {
  return (
    <>
      <a
        id={id}
        key={id}
        className="mb-6 py-6 px-8 h-[68px] w-[343px] md:w-full lg:h-[72px] bg-zuri-gray-200 rounded-lg font-medium hover:bg-zuri-gray-300 text-center text-[14px] md:text-[18px] outline-none focus:ring-[1px] focus:ring-zuri-gray focus:bg-zuri-gray-200"
        // target="blank"
        href={link}
      >
        {name}
      </a>
    </>
  );
};

export default Links;

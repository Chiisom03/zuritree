import React from "react";

const Header = () => {
  return (
    <div className="mb-14 flex flex-col justify-center items-center ">
      <img
        id="profile__img"
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
  );
};

export default Header;

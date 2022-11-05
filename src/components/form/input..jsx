import React from "react";

const Input = ({ label, isTextArea, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-zuri-gray-700">{label}</label>
      {isTextArea ? (
        <textarea
          className="col-span-12 border py-3 px-[14px] w-full h-[132px] rounded-lg border-zuri-gray-300 lowercase outline-none focus:ring-[1px] ring-z-pry-200 text-zuri-gray-900"
          placeholder="Send me a message and I'll reply you as soon as possible..."
        />
      ) : (
        <input
          className="border px-[14px] py-[10px] w-full rounded-lg border-zuri-gray-300 outline-none focus:ring-[1px] ring-z-pry-200 text-zuri-gray-900 mb-6"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;

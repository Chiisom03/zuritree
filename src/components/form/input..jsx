import React from "react";

const Input = ({ label }) => {
  return (
    <div className="grid">
      <label className="font-medium text-zuri-gray-700">{label}</label>
      <input
        className="border px-[14px] py-[10px] w-[348px] rounded-lg border-zuri-gray-300 lowercase outline-none focus:ring-[1px] ring-z-pry-200 text-zuri-gray-900"
        placeholder={'Enter your ' + label}
      />
    </div>
  );
};

export default Input;

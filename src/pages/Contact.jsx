import React from "react";

const Contact = () => {
  const name = "Peter";
  return (
    <div className="px-8 md:max-w-[720px] h-[616px] mx-auto mt-[96px] mb-[188px]">
      <h2 className="font-semibold text-4xl mb-5 text-zuri-gray-900">
        Contact Me
      </h2>
      <p className="text-xl mb-12 text-zuri-gray-600">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form className="grid gap-y-2 gap-x-2">
        <input
          name="firstname"
          className="input-style md:col-span-6"
          placeholder="Enter your first name"
        />
        <input
          name="lastname"
          className="input-style md:col-span-6"
          placeholder="Enter your last name"
        />
        <input
          name="email"
          className="input-style col-span-12"
          placeholder="yourname@email.com"
        />
        <textarea
          className="col-span-12 py-3 px-[14px] w-full h-[132px] input-style"
          placeholder="Send me a message and I'll reply you as soon as possible..."
        />
        <span className="flex items-center mb-8 col-span-12">
          <input type="Checkbox" className="mr-2 mb-8" />
          <p>You agree to providing your data to {name} who may contact you.</p>
        </span>
        <button
          type="submit"
          className="py-3 px-5 bg-z-pry-600 text-white rounded-lg w-full col-span-12 font-semibold"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;

import React from "react";

const Contact = () => {
  const name = "Peter";
  

  return (
    <div className="relative px-4 md:max-w-[720px] h-[616px] mx-auto mt-16 md:mt-[96px] mb-[280px] md:mb-[188px]">
      <h2 className="font-semibold text-4xl mb-5 text-zuri-gray-900">
        Contact Me
      </h2>
      <p className="text-lg md:text-xl mb-12 text-zuri-gray-600">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form className="grid gap-y-6 gap-x-6">
        <label className="label-style">
          First name
          <input
            name="firstname"
            id="first_name"
            className="input-style md:col-span-6"
            placeholder="Enter your first name"
          />
        </label>
        <label className="label-style">
          Last name
          <input
            name="lastname"
            id="last_name"
            className="input-style md:col-span-6"
            placeholder="Enter your last name"
          />
        </label>
        <label className="label-long-style">
          Email
          <input
            name="email"
            id="email"
            className="input-style col-span-12"
            placeholder="yourname@email.com"
          />
        </label>
        <label className="label-long-style">
          Message
          <textarea
            id="message"
            className="col-span-12 py-3 px-[14px] w-full h-[132px] input-style"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
        </label>
        <span className="flex items-start md:items-center mb-8 col-span-12">
          <input
            type="Checkbox"
            className="mr-3 rounded-md h-5 w-5 focus:ring ring-z-pry-200 border border-zuri-gray-300 outline-none appearance-none bg-white checked:border-z-pry-600 checked:text-z-pry-600"
          />

          <p className="text-zuri-gray-600">
            You agree to providing your data to {name} who may contact you.
          </p>
        </span>
        <button
          id="btn__submit"
          type="submit"
          className="py-3 px-5 bg-z-pry-600 text-white rounded-lg w-full col-span-12 font-semibold outline-none focus:ring-4"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;

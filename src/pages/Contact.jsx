import React from "react";
import Input from "../components/form/input.";

const Contact = () => {
  return (
    <div className="px-8 max-w-[720px] max-h-[616px] mx-auto my-auto">
      <h2 className="font-semibold text-4xl mb-5 text-zuri-gray-900">
        Contact Me
      </h2>
      <p className="text-xl mb-12 text-zuri-gray-600">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form className="grid mx-">
        <Input label="First Name" placeholder="Enter your first name" />
        <Input label="Last Name" placeholder="Enter your last name" />
        <Input label="Email" placeholder="yourname@email.com" />
        <Input label="Message" isTextArea={true} />
      </form>
    </div>
  );
};

export default Contact;

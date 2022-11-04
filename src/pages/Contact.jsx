import React from "react";
import Input from "../components/form/input.";

const Contact = () => {
  return (
    <div className="px-8">
      <h2 className="font-semibold text-4xl mb-5 text-zuri-gray-900">Contact Me</h2>
      <p className="text-xl mb-12 text-zuri-gray-600">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form className="grid">
        <Input label="First Name"/>
        <Input label="Last Name"/>
      </form>
    </div>
  );
};

export default Contact;

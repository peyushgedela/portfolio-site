import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-700 pb-24">
      <h1 className="my-20 text-center text-4xl">
        <span className="text-gray-400 font-light">Let's</span> Connect
      </h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">
          <a href="mailto:peyushgedela@gmail.com" className="underline">
            {CONTACT.email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

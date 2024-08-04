import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-gray-500">Me</span>
      </h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.75 }}
        className="flex flex-wrap"
      >
        <div className="w-full items-center justify-center">
          <p className="my-2">{ABOUT_TEXT}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

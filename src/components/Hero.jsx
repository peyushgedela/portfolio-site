import React from "react";
import { HERO_CONTENT } from "../constants";
import logo from "../assets/profile.jpg";
import { motion } from "framer-motion";

const container = (value) => {
  return {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: value,
        duration: 0.5,
      },
    },
  };
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-700 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-3xl font-thin tracking-wider lg:mt-16 lg:text-7xl"
            >
              Peyush Gedela
            </motion.h1>
            <motion.span
              variants={container(0.25)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-600 via-gray-400 to-purple-500 font-light bg-clip-text text-2xl lg:text-4xl tracking-wide text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 lg:pr-52 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              src={logo}
              alt="profile-picture"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

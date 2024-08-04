import { FaReact, FaPython, FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa6";
import { SiMongodb, SiTensorflow, SiScikitlearn } from "react-icons/si";
import { motion } from "framer-motion";

const iconanimation = (dur) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: dur,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse",
    },
  },
});

const Texhnologies = () => {
  return (
    <div className="border-b border-neutral-700 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconanimation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-cyan-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconanimation(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-green-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconanimation(4)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-yellow-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconanimation(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiTensorflow className="text-orange-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconanimation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-green-700 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconanimation(3)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-blue-300 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconanimation(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiScikitlearn className="text-gray-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconanimation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-orange-200 text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Texhnologies;

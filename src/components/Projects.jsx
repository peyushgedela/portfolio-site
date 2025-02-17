import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-700 pb-24">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((p, i) => (
          <div key={i} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                src={p.image}
                alt={p.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h2 className="mb-2 font-semibold">{p.title}</h2>
              <p className="mb-4 font-light">{p.description}</p>
              {p.technologies.map((t, i) => (
                <span
                  key={i}
                  className="mr-2 bg-gradient-to-r from-gray-400 to-slate-300 text-purple-950 rounded-full font-normal text-sm px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

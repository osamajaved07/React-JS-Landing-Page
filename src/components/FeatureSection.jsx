import { motion } from "framer-motion";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="features" className="relative mt-20 border-b border-slate-800 min-h-[800px]">
      <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
        <motion.span className="bg-slate-900 text-cyan-500 rounded-full h-10 text-lg font-medium px-4 py-2 uppercase" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: false }}>
          Feature
        </motion.span>
        <motion.h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false }}>
          Easily build <span className="bg-gradient-to-r from-cyan-500 to-cyan-800 text-transparent bg-clip-text">your code</span>
        </motion.h2>
      </motion.div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
          >
            <div className="group transition-all duration-300 hover:border hover:border-cyan-500 hover:shadow-md rounded-lg p-6 h-full ">
              <div className="flex items-start">
                <div className="flex h-10 w-10 p-2 bg-neutral-900 text-cyan-700 justify-center items-center rounded-full">{feature.icon}</div>
                <div className="ml-4">
                  <h5 className="mt-1 mb-4 text-xl group-hover:text-cyan-500 transition-colors">{feature.text}</h5>
                  <p className="text-md text-neutral-500">{feature.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

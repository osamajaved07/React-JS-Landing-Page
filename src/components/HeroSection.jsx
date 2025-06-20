import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false }}>
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> for developers</span>
      </motion.h1>
      <motion.p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }}>
        Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
      </motion.p>
      <motion.div className="flex justify-center my-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }}>
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md">
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border transition-all duration-300 hover:border-orange-500 hover:text-orange-500 hover:underline">
          Documentation
        </a>
      </motion.div>

      <motion.div className="flex mt-10 justify-between" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: false }}>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default HeroSection;

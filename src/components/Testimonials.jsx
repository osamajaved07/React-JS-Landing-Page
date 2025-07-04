import { motion } from "framer-motion";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div id="testimonials" className="mt-20 tracking-wide">
      <motion.h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
        What People are saying
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: false }}>
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin transition-all duration-300 hover:scale-[1.03] hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 hover:bg-neutral-800">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testimonial.image} alt="" />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="py-10">
      {/* Heading */}
      <motion.div
        className="py-10 space-y-2 text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-yellow-700 text-sm md:text-base">YOUR WATCH, OUR EXPERTISE</p>
        <h1 className="text-3xl md:text-5xl ">DISCOVER THE PERFECT WATCH</h1>
        <h1 className="text-3xl md:text-5xl ">DESIGNED FOR YOU</h1>
      </motion.div>

      {/* Image Grid */}
      <div className="py-10 space-y-16 px-4">
        {/* First Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-16 space-y-8 md:space-y-0">
          <motion.div
            className="h-[20rem] md:h-[30rem] w-full md:w-1/2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/Services-1.jpg"
              alt="Service Image"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            className="h-[20rem] md:h-[30rem] w-full md:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/Services-2.jpg"
              alt="Service Image"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-16 space-y-8 md:space-y-0">
          <motion.div
            className="h-[20rem] md:h-[30rem] w-full md:w-1/2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/Services-3.jpg"
              alt="Service Image"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            className="h-[20rem] md:h-[30rem] w-full md:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/Services-4.jpg"
              alt="Service Image"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;

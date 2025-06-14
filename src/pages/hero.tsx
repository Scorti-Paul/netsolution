import { Link } from "react-scroll";
import React from "react";
// import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";


const Hero = () => {
  return (
    <section className="mb-26" id="home">
      <div className="px-8 md:flex items-center md:px-24">
        <div className="mt-16 w-full md:hidden">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ y: [0, 10, -10, 0] }}
            transition={{
              repeat: Infinity,
              type: "keyframes",
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
          >
            <Image
              src="/hero.png"
              alt="networking"
              width={1388}
              height={1192}
            />
          </motion.div>
        </div>
        <div>
          <h3 className="text-5xl mt-10 md:mt-0 md:text-7xl font-bold mb-2">Connecting the Unconnected</h3>
          <p className="text-lg mb-14 text-gray-500">Harnessing IoT, 5G, and AI to Bridge the Digital Divide in Africa’s Rural Communities.</p>
          <Link
            to="problem"
            className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-700 hover:cursor-pointer ease-in-out transition-all duration-300 ">
            Explore Our Solution
          </Link>
        </div>
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ y: [0, 10, -10, 0] }}
            transition={{
              repeat: Infinity,
              type: "keyframes",
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
          >
            <Image
              src="/hero.png"
              alt="networking"
              width={1388}
              height={1192}
            />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <FaArrowDownLong className="text-center text-[#64C6FB]" size={30} />
      </div>
    </section>
  );
};

export default Hero;

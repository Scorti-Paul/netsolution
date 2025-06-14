import { Link } from "react-scroll";
import React from "react";
// import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

const Problem = () => {
  return (
    <section className="mt-36 mb-26" name="problem">
      <div className="md:flex gap-6 items-center px-24">
        <div >
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
              src="/problem.png"
              alt="problem statement"
              width={1388}
              height={1192}
            />
          </motion.div>
        </div>
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold">The Connectivity Crisis in Rural Africa</h3>
          <p className="text-lg mb-8 mt-2 text-gray-500">Despite the growing internet penetration across urban areas in Africa, rural regions remain vastly underserved. Many communities lack stable internet access due to high infrastructure costs, geographical barriers, and unreliable power sources.</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FaCircleCheck className="text-blue-400" size={23} />
              <span>Over 60% of Sub-Saharan Africans lack internet access (ITU, 2023)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck className="text-blue-400" size={23} />
              <span>Limited access to online education, tele-medicine, and e-commerce</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCircleCheck className="text-blue-400" size={23} />
              <span>Youth and women in remote communities are the most affected</span>
            </div>
          </div>
          <p className="text-xl  mt-6 ">This digital divide is not just a technology issue, it’s a human development challenge.</p>
        </div>
      </div>
    </section>
  );
};

export default Problem;

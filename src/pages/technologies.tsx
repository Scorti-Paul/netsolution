import { Link } from "react-scroll";
import React from "react";
// import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

const Technologies = () => {
  return (
    <section name="technologies">
      <div className="">
        <div className="px-24 py-24">
          <h3 className="text-3xl font-bold text-center">Why IoT, 5G, and AI?</h3>
          <p className="text-lg mb-8 text-center max-w-xl mx-auto text-gray-500">This trio creates a resilient, adaptive network model designed for remote environments.</p>
          <div className="mx-auto max-w-7xl">
            <div className="flex gap-8">
              <div className="flex gap-3 items-center bg-white rounded-2xl border border-gray-100 p-3">
                <div className="bg-[#026DDB] w-28 h-28 flex justify-center items-center rounded-2xl">
                  <Image
                    src="/iot2.png"
                    alt="problem statement"
                    width={70}
                    height={119}
                  />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold mb-2">IoT</h3>
                  <p className="text-base text-gray-500 pb-1">Enables smart local networks where each device becomes a node.</p>
                  <p className="text-base text-gray-500">Reduces the need for heavy infrastructure.</p>
                </div>
              </div>
              <div className="flex gap-3 items-center bg-white rounded-2xl border border-gray-100 p-3">
                <div className="bg-[#026DDB] w-28 h-28 flex justify-center items-center rounded-2xl">
                  <Image
                    src="/iot2.png"
                    alt="problem statement"
                    width={70}
                    height={119}
                  />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold mb-2">AI</h3>
                  <p className="text-base text-gray-500 pb-1">Automates decision-making for network management.</p>
                  <p className="text-base text-gray-500">Lowers operational cost and improves uptime.</p>
                </div>
              </div>
            </div>
            <div className="max-w-3xl mx-auto mt-8">
              <div className="flex gap-3 items-center bg-white rounded-2xl border border-gray-100 p-3">
                <div className="bg-[#026DDB] w-28 h-28 flex justify-center items-center rounded-2xl">
                  <Image
                    src="/iot2.png"
                    alt="problem statement"
                    width={70}
                    height={119}
                  />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold mb-2">5G Technology</h3>
                  <p className="text-base text-gray-500 pb-1">Delivers faster speeds and lower latency.</p>
                  <p className="text-base text-gray-500">Ideal for real-time services like online education and emergency care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

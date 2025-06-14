import { Link } from "react-scroll";
import React from "react";
// import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

const Proposed = () => {
  return (
    <section >
      <div className="bg-gray-50" name="proposed">
        <div className="px-24 py-24">
          <h3 className="text-3xl font-bold text-center">A Hybrid Tech Model for Rural Connectivity</h3>
          <p className="max-w-3xl text-center mx-auto mb-8 ">Our solution combines IoT-based mesh networks, 5G community hubs, and AI optimization to create a scalable, low-cost internet access system in rural Africa.</p>
          <div className="grid grid-cols-3 max-w-6xl mx-auto gap-4">
            <div className="bg-white rounded-2xl pb-6">
              <Image
                src="/5g.png"
                alt="problem statement"
                width={389}
                height={219}
              />
              <div className="px-4 pt-8">
                <h3 className="text-xl font-bold text-center mb-2">5G Community Hubs</h3>
                <p className="text-base text-center text-gray-500">Deployed at schools, clinics, or marketplaces to offer high-speed, long-range internet access to clusters of users.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl">
              <Image
                src="/iot.png"
                alt="problem statement"
                width={389}
                height={219}
              />
              <div className="px-4 pt-8">
                <h3 className="text-xl font-bold text-center mb-2">IoT Mesh Networks</h3>
                <p className="text-base text-center text-gray-500">Solar-powered routers installed on poles or buildings allow homes and devices to connect through a local data-sharing network.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl pb-6">
              <Image
                src="/ai.png"
                alt="problem statement"
                width={389}
                height={219}
              />
              <div className="px-4 pt-8">
                <h3 className="text-xl font-bold text-center mb-2">AI-Powered Optimization</h3>
                <p className="text-base text-center  text-gray-500">AI models predict traffic surges, manage data flow, and diagnose network faults to reduce downtime and improve service quality.</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposed;

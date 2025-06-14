import { Link } from "react-scroll";
import React from "react";
// import styles from "@/styles/Home.module.css";
import Image from "next/image";

const Transformation = () => {
  return (
    <section id="impact">
      <div className="px-8 md:px-24 py-14 bg-transformation">
        <div className="md:px-24">
          <h3 className="text-3xl font-bold text-center ">Transforming Lives with Smarter Internet</h3>
          <p className="text-lg mb-8 text-center text-gray-500">With reliable and affordable internet access, rural communities in Africa can unlock:</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/40 rounded-2xl p-5 border border-gray-200">
              <Image
                src="/learning.png"
                alt="problem statement"
                width={60}
                height={119}
              />
              <div className="px-2 pt-6">
                <h3 className="text-xl font-bold mb-2">Digital Education</h3>
                <p className="text-base text-gray-500">Farmers, students, and workers access e-learning platforms, tutorials, and digital tools.</p>
              </div>
            </div>
            <div className="bg-white/40 rounded-2xl p-5 border border-gray-200">
              <Image
                src="/health.png"
                alt="problem statement"
                width={60}
                height={119}
              />
              <div className="px-2 pt-6">
                <h3 className="text-xl font-bold mb-2">eHealth & Tele-Medicine</h3>
                <p className="text-base text-gray-500">Remote villages connect to urban hospitals and health professionals for diagnostics and advice.</p>
              </div>
            </div>
            <div className="bg-white/40 rounded-2xl p-5 border border-gray-200">
              <Image
                src="/light_cart.png"
                alt="problem statement"
                width={60}
                height={119}
              />
              <div className="px-2 pt-6">
                <h3 className="text-xl font-bold mb-2">Job Creation & E-Commerce</h3>
                <p className="text-base text-gray-500">Local artisans and entrepreneurs tap into global digital markets.</p>
              </div>
            </div>
            <div className="bg-white/40 rounded-2xl p-5 border border-gray-200">
              <Image
                src="/community.png"
                alt="problem statement"
                width={60}
                height={119}
              />
              <div className="px-2 pt-6">
                <h3 className="text-xl font-bold mb-2">Community Development</h3>
                <p className="text-base text-gray-500">Increased access to information empowers better decisions, innovation, and civic engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;


import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden lg:flex lg:justify-between lg:bg-white lg:items-center lg:px-24 lg:py-5">
        <div>
          <Image
            src="/logo.png"
            width={286}
            height={192}
            alt="logo"
          />
        </div>
        <ul className="flex items-center gap-8">
          <li className="">
            <Link
              className="text-[#2B2F52] py-2 hover:text-[#2B2F52] hover:cursor-pointer"
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={20}
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              className="text-[#2B2F52] py-2 hover:text-[#2B2F52] hover:cursor-pointer"
              to="problem"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={20}
            >
              Problem Statement
            </Link>
          </li>
          <li className="">
            <Link
              className="text-[#2B2F52] py-2 hover:text-[#2B2F52] hover:cursor-pointer"
              to="proposed"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={20}
            >
              Proposed Solution
            </Link>
          </li>
          <li className="">
            <Link
              className="text-[#2B2F52] py-2 hover:text-[#2B2F52] hover:cursor-pointer"
              to="technologies"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={20}
            >
              Technologies Involved
            </Link>
          </li>
          <li className="">
            <Link
              className="text-[#2B2F52] py-2 hover:text-[#2B2F52] hover:cursor-pointer"
              to="impact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={20}
            >
              Impact & Benefits
            </Link>
          </li>

          <li className="">
            <Link
              className="text-[#2B2F52] py-2 hover:text-[#2B2F52] hover:cursor-pointer"
              to="footer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={20}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className="lg:hidden relative z-50 bg-white ">
        <div className="flex justify-between items-center md:py-8 fixed top-0 w-full px-8 md:px-6 bg-white ">
          
            <div className="py-2">
              <Image
                src="/logo.png"
                width={180}
                height={192}
                alt="logo"
              />
            </div>
            
          <motion.div
            animate
            className="text-[#2B2F52] p-2 rounded-full z-30  fixed right-4 hover:cursor-pointer"
            onClick={handleClick}
          >
            {!nav ? (
              <motion.svg
                animate
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </motion.svg>
            ) : (
              <motion.svg
                animate
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            )}
          </motion.div>
        </div>
        <motion.ul
          // initial={{ scale: 0, x: 200 }}
          animate={{
            scale: !nav ? 1 : 1,
            x: !nav ? 200 : 0,
          }}
          transition={{ type: "spring", duration: 1 }}
          className={
            !nav
              ? "hidden"
              : "bg-white h-screen fixed w-full top-14 right-0 z-50 pl-8 py-6 pr-8"
          }
        >
          <li className="py-3 mb-2">
            <Link
              className="py-2 text-2xl leading-3 pb-2 hover:text-[#2B2F52]"
              to="home"
              activeClass="active"
              onClick={handleClose}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={20}
            >
              Home
            </Link>
          </li>
          <li className="py-3 mb-2">
            <Link
              className="py-2 text-2xl leading-3 pb-2 hover:text-[#2B2F52]"
              to="problem"
              activeClass="active"
              onClick={handleClose}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={20}
            >
              Problem Statement
            </Link>
          </li>
          <li className="py-3 mb-2">
            <Link
              className="py-2 text-2xl leading-3 pb-2 hover:text-[#2B2F52]"
              to="proposed"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={handleClose}
              offset={0}
              duration={500}
              delay={20}
            >
              Proposed Solution
            </Link>
          </li>
          <li className="py-3 mb-2">
            <Link
              className="py-2 text-2xl leading-3 pb-2 hover:text-[#2B2F52]"
              to="technologies"
              activeClass="active"
              spy={true}
              onClick={handleClose}
              smooth={true}
              offset={0}
              duration={500}
              delay={20}
            >
              Technologies Involved
            </Link>
          </li>
          <li className="py-3 mb-2">
            <Link
              className="py-2 text-2xl leading-3 pb-2 hover:text-[#2B2F52]"
              to="impact"
              activeClass="active"
              spy={true}
              onClick={handleClose}
              smooth={true}
              offset={0}
              duration={500}
              delay={20}
            >
              Impact & Benefits
            </Link>
          </li>

          <li className="py-3 mb-2">
            <Link
              className="py-2 text-2xl leading-3 pb-2 hover:text-[#2B2F52]"
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={handleClose}
              offset={0}
              duration={500}
              delay={20}
            >
              Contact
            </Link>
          </li>
        </motion.ul>
      </nav>
    </>
  );
};

export default Navbar;

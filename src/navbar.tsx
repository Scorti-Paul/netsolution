
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
          className="w-auto h-auto"
          width={366}
          height={292}
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
      <nav className="lg:hidden  relative z-50">
        <div className="flex justify-between items-center py-8 bg-black fixed top-0 w-full px-6">
          <div
            className={
              "font-bold  fixed z-30 text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange to-indigo item-start mb-4 mt-4"
            }
          >
            PAUL AHORSU
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
                className="w-6 h-6"
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
                className="w-6 h-6"
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
              : "bg-gray-dark fixed w-full top-14 right-0 z-50 border-t border-l border-b border-slate-400 rounded-tl-lg rounded-bl-lg pl-6 py-6 pr-8"
          }
        >
          <li className="py-1 mb-2">
            <Link
              className="text-[#2B2F52] py-2 hover:text-[#2B2F52]"
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
          <li className="py-1 mb-2">
            <Link
              className="text-[#2B2F52] py-2 hover:text-[#2B2F52]"
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
          <li className="py-1 mb-2">
            <Link
              className="text-[#2B2F52] py-2 hover:text-[#2B2F52]"
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
          <li className="py-1 mb-2">
            <Link
              className="text-[#2B2F52] py-2 hover:text-[#2B2F52]"
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
          <li className="py-1 mb-2">
            <Link
              className="text-[#2B2F52] py-2 hover:text-[#2B2F52]"
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

          <li className="py-1 mb-2">
            <Link
              className="text-[#2B2F52] py-2 hover:text-[#2B2F52]"
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
          <li className="mt-4">
            <ul className="flex">
              <li className="">
                <a
                  className="text-[#2B2F52] hover:text-slate-200"
                  href="https://linkedin.com/in/paul-ahorsu-5ab850169"
                  target="_blank"
                  onClick={handleClose}
                >
                  <FaLinkedin size={22} />
                </a>
              </li>
              <li className="ml-2">
                <a
                  className="text-[#2B2F52] hover:text-slate-200"
                  href="https://github.com/Scorti-Paul"
                  target="_blank"
                  onClick={handleClose}
                >
                  <FaGithub size={22} />
                </a>
              </li>
            </ul>
          </li>
        </motion.ul>
      </nav>
    </>
  );
};

export default Navbar;

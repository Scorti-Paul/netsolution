
import Image from "next/image";
import React from "react";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const dateYear = new Date();
  const currentYear = dateYear.getFullYear();
  return (
    <section className="pb-4 flex flex-col items-center justify-center pt-[6rem]" name="footer">
      <div className="pb-3">
        <Image
          src="/logo.png"
          className="w-auto h-auto"
          width={166}
          height={192}
          alt="logo"
        />
      </div>
      <div>
        <p className="text-xl text-center tracking-wide font-light">
          We’re open to collaborations, feedback, and further development ideas.
        </p>
        <ul className="flex justify-center items-center gap-5 pt-4 pb-6">
          <li>
            <a
              href="https://linkedin.com/in/paul-ahorsu-5ab850169"
              className="text-gray-600 hover:text-gray-700"
            >
              <FaFacebook size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Scorti-Paul"
              className="text-gray-600 hover:text-gray-700"

            >
              <RiInstagramFill size={29} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Scorti-Paul"
              className="text-gray-600 hover:text-gray-700"
            >
              <BsTwitterX size={25} />
            </a>
          </li>
        </ul>
        <p className="text-xs text-center tracking-wide font-light pt-4">
          Copyright © {currentYear}. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;

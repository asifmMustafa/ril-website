import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="m-2 md:px-12 md:pt-10 md:pb-5 px-6 pt-16 pb-5">
      <div className="flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          <img className="w-28 mb-10" src="/logo_.png" />
          <p className="mb-4 font-semibold text-2xl">
            Feel free to <br />
            contact with us
          </p>
          <p className="inline-flex items-center px-3 py-1 border-[1px] border-[#B9B9B9] rounded-3xl text-sm w-auto">
            info@irl-bd.com
            <img
              className="w-[18px] ml-1"
              src="/icons/icon_six.png"
              alt="Icon"
            />
          </p>
        </div>
        <div className="md:w-1/2 w-full flex flex-row md:mt-0 mt-10">
          <div className="w-1/2">
            <p className="mb-4 text-[#888888]">Navigation</p>
            <Link
              className="cursor-pointer mb-2 block"
              spy={true}
              smooth={true}
              to="hero"
            >
              Home
            </Link>
            <Link
              className="cursor-pointer mb-2 block"
              spy={true}
              smooth={true}
              to="about"
            >
              About
            </Link>
            <Link
              className="cursor-pointer mb-2 block"
              spy={true}
              smooth={true}
              to="projects"
            >
              Projects
            </Link>
            <Link
              className="cursor-pointer mb-2 block"
              spy={true}
              smooth={true}
              to="careers"
            >
              Careers <span className="text-[#888888] text-xs">(hiring)</span>
            </Link>
          </div>
          <div className="w-1/2">
            <p className="mb-4 text-[#888888]">Socials</p>
            <a href="#" className="mb-2 block cursor-pointer">
              Facebook
            </a>
            <a href="#" className="mb-2 block cursor-pointer">
              Twitter
            </a>
            <a href="#" className="mb-2 block cursor-pointer">
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between mt-16 text-xs text-[#888888]">
        <p>
          ©All Rights reserved 2024 Resilient Innovations Limited (RIL) is a
          company specializing in sourcing, project management, and consulting
          within the global marine industry.
        </p>
        <p className="md:mt-0 mt-5">Privacy Policy &#x2022; Cookies Policy</p>
      </div>
    </div>
  );
};

export default Footer;

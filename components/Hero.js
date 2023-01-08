import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="Hero" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's Build Something Together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">James</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto ">
            I’m a new Front End Developer focused on building responsive
            front-end web applications integrating back-end technologies.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/james-anuncio-9a52471aa/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaLinkedinIn />
              </div>
            </Link>

            <Link href="https://github.com/yada-kun">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaGithub />
              </div>
            </Link>

            <Link href="#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <AiOutlineMail />
              </div>
            </Link>

            <Link href="https://www.facebook.com/iAMearlz">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <AiFillFacebook />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

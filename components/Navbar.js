import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import navLogo from "../public/assets/navLogo.png";

import {
  AiFillFacebook,
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setlinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (
      router.asPath === "/property" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setlinkColor("#f8f8f8");
    } else {
      setNavBg("#ecf0f3");
      setlinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20  z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={navLogo} alt="/" width={90} height={30} />
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b"> Home</li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b"> About</li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={navLogo} width={87} height={35} alt="/" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="#projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link href="https://www.linkedin.com/in/james-anuncio-9a52471aa/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaLinkedinIn />
                  </div>
                </Link>

                <Link href="https://github.com/yada-kun">
                  <div className="rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaGithub />
                  </div>
                </Link>

                <Link href="#contact">
                  <div className="rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <AiOutlineMail />
                  </div>
                </Link>

                <Link href="https://www.facebook.com/iAMearlz">
                  <div className="rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <AiFillFacebook />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

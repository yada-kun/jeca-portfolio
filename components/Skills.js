import Image from "next/image";
import React from "react";

import html from "../public/assets/skills/html.PNG";
import css from "../public/assets/skills/css.png";
import javascript from "../public/assets/skills/javascript.png";
import react from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind.png";
import nextjs from "../public/assets/skills/nextjs.png";
import sass from "../public/assets/skills/sass.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={html} alt="/" width={64} height={64} />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={css} alt="/" width={64} height={64} />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={javascript} alt="/" width={64} height={64} />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} alt="/" width={64} height={64} />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwind} alt="/" width={64} height={64} />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nextjs} alt="/" width={64} height={64} />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>NEXTJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/mui.png"
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>MUI</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={sass} alt="/" width={64} height={64} />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>Sass</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

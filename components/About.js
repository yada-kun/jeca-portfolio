import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto lg:flex  gap-8 px-5">
        <div>
          <p className="uppercase  py-4 text-xl text-center lg:text-left tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-2 text-center lg:text-left">Who I am</h2>
          <p className="py-2 text-gray-600">
            Hello, I’m a James, I am a new Front-End Web-developer based in Cebu
            Philipphines. I create websites that help connect business with
            people. My passion is to help business grow while learning to become
            better personal and professionally.
          </p>
          <p className="py-2 text-gray-600">
            I believe that human potential is limitless. So seeking everyday
            improvement is one of my core values. I would love to connect help
            you with your bussiness.
          </p>

          <a
            href="https://drive.google.com/file/d/1Cf7NS_Ty7Bqb76yHgy9ymg7s8VLYgBO9/view?usp=share_link"
            download
          >
            <button className="w-32 h-12 my-2">Check My CV</button>
          </a>
        </div>
        <div className="w-full h-auto m-auto  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/Picture.PNG"
            className="rounded-xl"
            alt="/"
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

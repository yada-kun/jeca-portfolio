import Image from "next/image";
import Link from "next/link";
import React from "react";

import ProjectItem from "./ProjectItem";

import propertyImg from "../public/assets/projects/property.jpg";
import bpImg from "../public/assets/projects/bpecommerce.png";
import memoryImg from "../public/assets/projects/memory.png";
import layagImg from "../public/assets/projects/layag.png";
import fluffypan from "../public/assets/projects/fluffypan.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Fluffy Bread Pan"
            backgroundImg={fluffypan}
            projectUrl="/fluffy"
          />
          <ProjectItem
            title="BlackPink Ecommerce"
            backgroundImg={bpImg}
            projectUrl="/blackpink"
          />
          <ProjectItem
            title="Layag Travels"
            backgroundImg={layagImg}
            projectUrl="/layag"
          />
          <ProjectItem
            title="Memory Game"
            backgroundImg={memoryImg}
            projectUrl="/memory"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

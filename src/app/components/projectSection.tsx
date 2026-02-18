"use client";

import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from 'aos'
import { projects } from "../export";
import ProjectsectionCard from "../cards/projectsectionCard";
import Image from "next/image";

const ProjectSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center justify-center bg-cover bg-center h-max py-5 space-y-8 "
    >

      <div className="w-[95%] flex flex-col items-center justify-center bg-cover bg-center h-max py-5 space-y-18 py-12">
      
        <h1
          className="text-2xl sm:text-2xl lg:text-4xl md:text-[3xl] text-black text-center font-bold "
        >
          We Are Specialized In Projects
        </h1>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-full  flex flex-wrap  gap-y-14 items-center justify-center  "
        >
          {projects.map((item,i) => (
            <div className="xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-[45%] h-[420px]  flex items-center justify-center width90 " data-aos="fade-up" data-aos-delay={i * 100} key={i}>
              <ProjectsectionCard imageurl={item.image} title={item.title} description={item.about} banner={item.banner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
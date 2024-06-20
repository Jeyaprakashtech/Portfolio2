"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion"; 
import {headContainerAnimation, headContentAnimation} from "../utils/motion"
import { headTextAnimation } from "../utils/motion";




function HeroSection() {
  
  return (
  
    <section className="sm:mt-[5%] sm:mb-[10%] relative" id="HeroSection">
      <motion.div {...headContainerAnimation}>

     
      <div className="grid grid-cols-1 sm:grid-cols-12 relative ">
      
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <motion.div {...headTextAnimation}>
            
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Jeyaprakash",
                1000,
                "Web Developer",
                1000,
                "App Developer",
                1000,
                "Graphics Designer",
                1000,
                "Ui/Ux Designer",
                1000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
              />
          </h1>
              </motion.div>
              <motion.div {...headTextAnimation}>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
            A recent BCA graduate passionate about software, web, and
            application development, as well as graphic design. My educational
            background has equipped me with a solid foundation in programming
            and design, and I am eager to apply my skills to create innovative
            solutions. As a fresher, I bring a fresh perspective, a keen eye for
            detail, and a dedication to continuous learning.
          </p>
              </motion.div>
              <motion.div {...headContainerAnimation}>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-700 via-purple-800 to-pink-700 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
              </motion.div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <motion.div {...headContainerAnimation}>
          <Tilt  tiltMaxAngleX={35} tiltMaxAngleY={35}>
          <div className="px-1 py-1 sm:w-[300px] sm:h-[300px] rounded-full bg-gradient-to-br mt-4 mb-2 from-blue-700 via-purple-800 to-pink-700 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <span className="block bg-[#121212] h-full rounded-full px-10 py-10">
              <Image
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:top-1/2 lg:left-1/2 lg:w-[300px] lg:h-[300px]"
                src="/images/avatars/AV8-BG.png"
                alt="hero img"
                width={350}
                height={350}
              />
            </span>
          </div>
          </Tilt>
              </motion.div>
        </div>
      </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;

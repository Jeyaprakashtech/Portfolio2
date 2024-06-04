"use client";

import React, { useState, useRef } from "react";
import { projects } from "../data/constants";
import Projectcard from "../components/cards/Projectcard";
import Title from "./Title";
import {animate, moition, useInView} from "framer-motion";
const Project = () => {
    const [toggle, setToggle] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
  const cardvar= {
    initial:{y:50, opacity:0},
    animate:{y:0, opacity:1}
  }
  return (
    <section ref={ref}>
      <div id="Projects" className="flex flex-col items-center justify-center mt-12 px-4 relative ">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-3">
      <Title title={"Projects"} subtitle={"I have worked on a some projects. From web apps to android apps. Here are some of my projects."}/>
        {/* <div className="text-white flex flex-row justify-center items-center mb-5 gap-2 py6">
      
          <button
            className={`rounded-full border-2  hover:border-white px-6 py-3 text-xl cursor-pointer ${toggle === "all" && "border-purple-500"}`}
            onClick={() => setToggle("all")}
          >
            ALL
          </button>
      
          <button
            className={`rounded-full border-2 hover:border-white px-6 py-3 text-xl cursor-pointer ${toggle === "web app" && "border-purple-500"}`}
            onClick={() => setToggle("web app")}
          >
            Web
          </button>
      
          <button
            className={`rounded-full border-2  hover:border-white px-6 py-3 text-xl cursor-pointer ${toggle === "android app" && "border-purple-500"}`}
            onClick={() => setToggle("android app")}
          >
            APP
          </button>
      
      
        </div> */}
        {/* <div className="text-white flex flex-row justify-center items-center mb-5 gap-2 py6">
          <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">ALL</button>
          <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">Web</button>
        </div> */}
        <ul className="flex flex-wrap justify-center items-center gap-7">
          {toggle === "all" && projects.map((project, index) => <Projectcard key={index} project={project} />)}
          {projects.filter((item) => item.category === toggle).map((project, index) => (
            <moition.li key={index} variants={cardvar} initial="initial" animate={isInView ? "animate":"initial"}>    
              <Projectcard key={index} project={project} /> 
            </moition.li>

          ))}
        </ul>
      </div>
        </div>
    </section>
  )
}

export default Project
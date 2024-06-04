import React from "react";
import { skills } from "../data/constants";
import { Tilt } from "react-tilt";
import Title from "./Title";
const Skills = () => {
  return (
    <div className="container flex flex-col justify-center relative  items-center lg:mt-[150px] mt-5 mb-4" id="Skills">
      
      <div className="wrapper relative flex justify-between flex-col w-[100%]  gap-3 lg:flex-col">
        <Title title={"Skills"} subtitle={"Here are some of the skills i have learned"}/>
        
        <div className="skillcontainer h-fit flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
              
                    
              <Tilt>
                <div
                key={index}
                className="skill px-[2px] py-[2px]  h-full bg-gradient-to-br mt-2 mb-2 from-blue-700 via-purple-800 to-pink-700  relative   w-full lg:mr-7 lg:ml-7 sm:mr-3 sm:ml-3  sm:w-[300px] lg:h-[fit]  lg:w-[500px] rounded-lg shadow-lg"
                style={{ boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px' }}
                >
                <span className="block bg-[#121212] h-full rounded  px-5 py-3">
                  <div className="skillstitle text-sm lg:text-2xl font-bold mb-5 text-center text-white">
                    {skill.title}
                  </div>
                  <div className="skillslist flex justify-center flex-wrap gap-3 mb-5">
                    {skill.skills.map((item, index_x) => (
                      <div
                        key={index_x}
                        className="text-[#dfe1e2] flex   bg-gradient-to-br mt-4 mb-2 from-blue-700 via-purple-800 to-pink-700  relative rounded-[14px] py-[2px] px-[2px] items-center justify-center"
                        >
                        <span className=" bg-[#121212] h-full rounded-[13px] justify-center text-[12px] lg:text-[13px] font-normal item-center flex flex-row gap-[8px] py-2 px-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-4 h-4 mr-1 mt-1"
                            />
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </span>
                            </div>
              </Tilt>
              
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

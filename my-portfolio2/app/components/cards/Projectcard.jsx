import React from "react";


const Projectcard = ({ project }) => {
  return (

    <div className="w-80 h-fit bg-card cursor-pointer rounded-lg shadow-lg overflow-hidden p-[5px] px-[2px] py-[2px]   relative  lg:h-[fit]   flex flex-col transition-all duration-500 ease-in-out hover:translate-y-[-10px] hover:shadow-2xl hover:brightness-110 ">
      <span className=" bg-[#121212] h-full rounded-lg justify-center text-[12px] lg:text-[13px] font-normal p-[2px]  ">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 bg-gradient-to-br   rounded-lg shadow-md"
      />
      <div className="flex flex-wrap py-3 px-3 gap-2 mt-1">
        {/* Add Tags here if needed */}
      </div>
      <div className="w-full flex flex-col gap-0 p-1">
        <div className="text-lg font-semibold text-secondary overflow-hidden text-ellipsis">
          {project.title}
        </div>
        <div className="text-xs ml-1 font-normal text-secondary/80">
          {project.date}
        </div>
        <div className="font-normal text-secondary/99 overflow-hidden mt-2 text-ellipsis line-clamp-3">
          {project.description}
        </div>
      </div>
      
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-semibold text-center"
      ><div className="cursor-pointer rounded-lg shadow-lg overflow-hidden bg-gradient-to-br mt-2 mb-2 p-[2px] mx-2 from-blue-700 via-purple-800 to-pink-700  relative  flex flex-col ">
      <span className=" bg-[#121212] h-full rounded-lg justify-center text-[12px] lg:text-[13px] font-normal  py-3 px-3">
        View Code
        </span>
        </div>
      </a>
      </span>
    </div>
  )
}


export default Projectcard;
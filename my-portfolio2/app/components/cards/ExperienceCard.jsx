import React from "react";
import { Tilt } from "react-tilt";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import {headContainerAnimation, headContentAnimation} from "../../utils/motion";
import { motion } from "framer-motion"; 
const ExperienceCard = ({ experience }) => {
  return (
    
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{}}
          src={experience?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        borderRadius: "6px",
        visibility: "visible",
        background: "linear-gradient(to bottom right, #1e3a8a, #6b21a8, #be185d)",
        padding: "3px",
        position: "relative",
        visibility:"visible"
      }}
      contentArrowStyle={{
        borderRight: "7px solid  #6b21a8",
      }}
     
      date={experience?.date}
    ><motion.div {...headContainerAnimation}>
      <Tilt >
        <span className="block bg-[#121212] h-full w-full rounded px-1 py-1">
          <div className="w-full py-2 px-2 flex max-w-full gap-3">
            <img
              src={experience?.img}
              alt={experience?.company}
              className="h-12 rounded mt-1"
            />
            <div className="w-full flex flex-col py-2 px-2">
              <div className="lg:text-xl sm:text-lg font-semibold text-sm text-white">
                {experience?.role}
              </div>
              <div className="lg:text-lg font-medium sm:text-sm text-xs text-gray-400">
                {experience?.company}
              </div>
              <div className="lg:text-sm font-normal sm:text-xs text-xs text-gray-500">
                {experience?.date}
              </div>
            </div>
          </div>
        </span>
      </Tilt>
      
    </motion.div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;

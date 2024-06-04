import React from "react";
import { Tilt } from "react-tilt";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education?.img}
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
        visibility:"visible",
        
        
      }}
      contentArrowStyle={{
        borderRight: "7px solid  #6b21a8",
      }}
      date={education?.date}
    >
        <Tilt>
        <span className="block bg-[#121212] h-full w-full rounded px-1 py-1">
      <div className="w-full py-2 px-2 flex max-w-full gap-3">
        <img src={education?.img} alt={education?.school} className="h-12 rounded mt-1 sm:h-10" />
        <div className="w-full flex flex-col">
          <div className="lg:text-xl text-lg font-semibold text-primary-99 sm:text-base text-white">{education?.school}</div>
          <div className="lg:text-lg text-xs font-medium text-secondary-99 sm:text-xs text-gray-400">{education?.degree}</div>
          <div className="lg:text-sm text-xs font-normal text-secondary-80 sm:text-xs text-gray-400">{education?.date}</div>
        </div>
      </div>
      <div className="text-sm lg:text-lg font-medium text-secondary-99 px-1 ml-1 text-gray-400 sm:text-sm">
        <b>Grade : </b>{education?.grade}
      </div>
      <div className="w-full lg:text-lg text-sm font-normal text-primary-99 ml-1 px-1 mb-2 text-gray-400 sm:text-sm">
        {education?.desc && <span>{education.desc}</span>}
      </div></span></Tilt>
    </VerticalTimelineElement>
    
  );
};

export default EducationCard;

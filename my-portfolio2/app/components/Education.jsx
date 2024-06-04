import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../data/constants";
import EducationCard from "../components/cards/Educationcard";
import EarthCanvas from "../components/canvas/Earth";
import Title from "./Title";
const Education = () => {
  return (
    <div id="Education" className="flex flex-col items-center justify-center mt-10 mb-10 relative ">
      <div className="flex flex-col items-center justify-between w-full max-w-6xl gap-3 relative">
      <Title title={"Education"} subtitle={"My education has been a journey of self-discovery and growth. My educational details are as follows.My work experience as an Intern"} />
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Education;

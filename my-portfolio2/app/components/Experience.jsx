import React from 'react';
import Title from "./Title";
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../data/constants';
import ExperienceCard from './cards/ExperienceCard';

const Experience = () => {
  return (
    <div id='Experience' className="container flex flex-col justify-center relative  items-center mt-9 mb-10">
      <div className="wrapper relative flex flex-col w-full max-w-8xl gap-3">
        <Title title={"Experience"} subtitle={"My work experience as an Intern"} />
        <VerticalTimeline animate={true}>
          {experiences.map((experience, index) => (
            
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
import Navlink from "./Navlink";

const Menuoverlay = ({ links }) => {
  return (
    <ul  className="flex flex-col py-4 items-center">
      {
        links.map((link, index) => (
            <li key={index}>
               <Navlink to={link.path} title={link.title} offset={link.offset} />
            </li>
        ))
      }
      <li
    href={"#contact"} 
    className='block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl round md:p-0 hover:text-white'>
        Contact
    </li>
    </ul>
  );
};

export default Menuoverlay;

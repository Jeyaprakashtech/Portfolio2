"use client";
import { Link } from 'react-scroll'
import React, {useState} from "react";
import Navlink from "./Navlink"; 
import Images from "next/image";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Menuoverlay from "./Menuoverlay";

const NavLink = [
  {
    title: "About",
    path: "HeroSection",
    offset: -160
  },
  {
    title: "Skills",
    path: "Skills",
    offset: -30
    
  },
  {
    title: "Experience",
    path: "Experience",
    offset: -30
  },
  {
    title: "Education",
    path: "Education",
    offset: -30
  },
  {
    title: "Projects",
    path: "Projects",
    offset: -30
  },

];
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto border border-[#33353f] top-0 left-0 right-0 z-10 bg-[#000000] bg-opacity-100 items-center">
      <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link rel="" href={"/"} className="text-2xl md:text-3xl text-white font-semibold">
          Portfolio
        </Link>
        <div className="moblie-menu block md:hidden">
            {
                !navbarOpen ? (
                    
                    <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 duration-75 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
                        <Bars3Icon className="h-5 w-5"/>
                    </button>
                ) : (
                    <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
                        <XMarkIcon className="h-5 w-5"/>
                        
                    </button>
                )
            }
        </div>
        <div className="menu hidden md:block md:w-auto  align-middle" id="navbar">
        <ul className="flex p-4 md:flex-row items-center md:p-0 md:space-x-8 mt-0">
  {NavLink.map((link, index) => (
    <li key={index}>
      <Navlink to={link.path} title={link.title} offset={link.offset} />
    </li>
  ))}
  <li>
    <div className="px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-700 via-purple-800 to-pink-700 hover:bg-slate-800 text-white ">
      <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
      <Link 
    smooth={true} offset={-30} duration={500} 
    to={'Contact'} 
    className='block py-2  pl-3 pr-4 cursor-pointer text-[#adb7be] sm:text-xl round md:p-0 active:text-white hover:text-white '>
        
        Contacts
    </Link>
      </span>
    </div>
  </li>
</ul>

        </div>
      </div>
      {navbarOpen ? <Menuoverlay links={NavLink}/>: null}
    </nav>
  );
};

export default Navbar;

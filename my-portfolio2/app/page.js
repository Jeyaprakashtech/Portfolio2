"use client";


import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

import StarCanvas from "../app/components/canvas/stars";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar/>
      <StarCanvas/>
      <div class="container mt-24 mb-0 mx-auto px-10 py-4">
        
        <HeroSection />
        <Skills/>
        <Experience/>
        <Education/>
        <Project/>
        <Contact/>
      </div>
        <Footer/>
      
    </main>
  );
}

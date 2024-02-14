"use client";
import { useEffect } from "react";
import NavBar from "@/components/nav_bar/navbar";
import Summit from "@/components/summit/summit";
import AboutMe from "@/components/about_me/aboutme";
import Projects from "@/components/projects/projects";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <NavBar />
      <Summit />
      <AboutMe />
      <Projects />
      {/* <div className="text-white h-lvh bg-slate-400">
        <h1>wd</h1>
        <h1>wd</h1>
        <h1>wd</h1>
        <h1>wwd</h1>
      </div>
      <div className="text-white h-lvh bg-black">
        <h1>wd</h1>
        <h1>wd</h1>
        <h1>wd</h1>
        <h1>wwd</h1>
      </div> */}
    </main>
  );
}

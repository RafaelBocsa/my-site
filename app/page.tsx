"use client";
import { useEffect } from "react";
import NavBar from "@/components/nav_bar/navbar";
import Summit from "@/components/summit/summit";
import SideCard from "@/components/side_card/sidecard";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer/footer";
import AboutMe from "@/components/about_me/about_me";
import Experience from "@/components/experience/experience";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="bg-[#121212] overflow-clip  ">
      <div className="lg:flex lg:justify-between gap-4 px-6 py-6 md:px-12  lg:py-0 max-w-screen-2xl mx-auto">
        <div className=" lg:w-1/2  ">
          <SideCard />
        </div>
        <div className="lg:w-1/2 py-20">
          <AboutMe />
          <Experience />
          <Projects />
        </div>
      </div>
    </main>
  );
}

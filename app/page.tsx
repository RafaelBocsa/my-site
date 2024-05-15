"use client";
import { useEffect } from "react";
import NavBar from "@/components/nav_bar/navbar";
import Summit from "@/components/summit/summit";
import AboutMe from "@/components/about_me/aboutme";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer/footer";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="bg-[#121212] w-full overflow-clip">
      <NavBar />
      <Summit />
      <AboutMe />
      <Projects />
      <div className="text-white h-lvh bg-[#121212] ">
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
      </div>
      <Footer />
    </main>
  );
}

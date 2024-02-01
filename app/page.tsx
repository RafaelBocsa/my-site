"use client";
import { useEffect } from "react";
import NavBar from "@/components/nav_bar/navbar";
import Summit from "@/components/summit/summit";
import AboutMe from "@/components/about_me/aboutme";

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
    </main>
  );
}

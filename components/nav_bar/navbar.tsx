import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const navbar = () => {
  const NavBar = useRef(null);

  useLayoutEffect(() => {
    const nav1 = gsap.timeline({
      // defaults: {
      //   ease: "power4.inOut",
      //   duration: 2,
      // },
    });
    nav1.to(NavBar.current, {
      "clip-path": "polygon(0% 100%,100% 100%,100% 0%, 0% 0%)",
      opacity: 1,
      duration: 1.5,
      y: 0,
    });
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const nav2 = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 2,
      },
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
        markers: true,
      },
    });
    nav2.to(NavBar.current, {
      opacity: 0,
    });
  }, []);

  function hoverOn() {
    const nav1 = gsap.timeline({});
    nav1.to(NavBar.current, {
      opacity: 1,
    });
  }
  function hoverOff() {
    const nav1 = gsap.timeline({});
    nav1.to(NavBar.current, {
      opacity: 0,
      delay: 2,
    });
  }

  return (
    <div
      className={styles.navbar}
      ref={NavBar}
      onMouseOver={() => {
        hoverOn();
      }}
      onMouseLeave={() => {
        hoverOff();
      }}
    >
      <div className=" gap-5 grid p-7  text-sm font-bold sm:text-md md:text-lg sm:fixed sm:flex">
        <Link
          href={"#AboutMe"}
          className=" hover:translate-y-1  ease-in-out group transition-all duration-300 "
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            ABOUT
          </span>
        </Link>
        <Link
          href={"/"}
          className=" hover:translate-y-1  ease-in-out group transition-all duration-300"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            PROJECTS
          </span>
        </Link>
        <Link
          href={"/"}
          className="  hover:translate-y-1  ease-in-out group transition-all duration-300"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            CONTACT
          </span>
        </Link>
      </div>
      <div className=" flex end-5 gap-5 fixed p-7 text-sm font-bold sm:text-md md:text-lg invisible sm:visible">
        <h1 className="   hover:translate-y-1  ease-in-out group transition-all duration-300">
          <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            EXPERIENCE
          </span>
        </h1>
        <a href="https://github.com/RafaelBocsa" target="_blank">
          <img
            src="/gitwhite.png"
            alt=""
            className=" h-4 hover:brightness-50 z-30 sm:h-5 md:h-7 hover:translate-y-1 transition ease-in-out invisible sm:visible "
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-bocsa-aa2588222/"
          target="_blank"
        >
          <img
            src="/In-White-128.png"
            alt=""
            className="h-4 hover:brightness-50 sm:h-5 md:h-7 hover:translate-y-1 transition ease-in-out invisible sm:visible"
          />
        </a>
      </div>
    </div>
  );
};

export default navbar;

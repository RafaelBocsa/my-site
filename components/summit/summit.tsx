import React from "react";
import styles from "./styles.module.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const summit = () => {
  const Summit = useRef(null);

  useLayoutEffect(() => {
    const sum1 = gsap.timeline({
      // defaults: {
      //   ease: "power4.inOut",
      //   duration: 2,
      // },
    });
    sum1.to(Summit.current, {
      "clip-path": "polygon(0% 100%,100% 100%,100% 0%, 0% 0%)",
      opacity: 1,
      duration: 2.2,
      y: 0,
    });
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sum2 = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 2,
      },
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
        // markers: true,
      },
    });
    sum2.to(Summit.current, {
      opacity: 0,
    });
  }, []);
  return (
    <div className={styles.summit} ref={Summit}>
      <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
        <h1 className="">RAFAELBOCSA</h1>

        <h1 className="opacity-50">RAFAELBOCSA</h1>

        <h1 className="opacity-20">RAFAELBOCSA</h1>

        {/* <h1 className="text-2xl z-20">An interactive web portfolio</h1> */}
      </div>
      {/* <img src="FrontMountain.png" className=" -my-96 absolute z-10" /> */}
      {/* <img src="DarkMountain.jpg" className=" -my-96" id="darkMontain" /> */}
    </div>
  );
};
export default summit;

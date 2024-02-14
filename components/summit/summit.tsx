import React from "react";
import styles from "./styles.module.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import NavBar from "@/components/nav_bar/navbar";

const summit = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#darkMontain", {
        filter: "brightness(1.2)",
        duration: 7,
        repeat: -1,
        yoyo: true,
      });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div className={styles.summit} ref={comp}>
      <div className="grid justify-center items-center py-20 ">
        <h1 className="text-8xl z-20">SUMMIT</h1>
        <h1 className="text-2xl z-20">An interactive web portfolio</h1>
      </div>
      {/* <img src="FrontMountain.png" className=" -my-96 absolute z-10" /> */}
      <img src="DarkMountain.jpg" className=" -my-96" id="darkMontain" />
    </div>
  );
};
export default summit;

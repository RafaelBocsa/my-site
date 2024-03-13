import React from "react";
import styles from "./styles.module.css";

const aboutme = () => {
  return (
    <div>
      <div className={styles.aboutMe} id="AboutMe">
        <div className="static">
          <img src="/me.png" className="w-80 min-w-40" />
        </div>
        <div className="max-w-[43rem]">
          <h1 className="text-4xl py-2">Software Engineer · Developer</h1>
          {/* <div className="border-t-2 h-2"></div> */}
          <h3 className="text-xl py-3 tracking-wide">
            My name's Rafael Bocsa, I'm a computer science coop student based in
            the GTA with interests in fullstack development, game development,
            design and cloud engineering.
          </h3>
          <h3 className="text-xl py-3 tracking-wide">
            Currently in my 4th year at Brock University completing my CS degree
            in Decemeber 2024 and looking for Summer 2024 coops/internships as
            well as new grad roles
          </h3>
          <div className="border-t-2 h-2"></div>
          <h1 className="text-xl  text-neutral-400 tracking-wide">
            Tech: Java, C++, React, Next.js, Python, JS, TS, Firebase
          </h1>
          <h1 className="text-xl  text-neutral-400 tracking-wide">
            Hobbies: Piano, Skiing, Snowboarding, Powerlifting, Fashion
          </h1>
        </div>
      </div>
      <div className="text-white  justify-center ite py-20 ">
        <h1>Career Objective</h1>
        <h1>
          Enthusiastic and driven 4th year Computer Science student with a
          passion for software engineering and cloud development seeking to
          leverage technical skills into real-world applications. Eager to
          contribute to innovation while honing professional skills in a dynamic
          setting.
        </h1>
      </div>
    </div>
  );
};

export default aboutme;

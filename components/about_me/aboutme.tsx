import React from "react";
import styles from "./styles.module.css";

const aboutme = () => {
  return (
    <div className={styles.aboutMe} id="AboutMe">
      <div className="">
        <img src="/me.png" className="w-80" />
      </div>
      <div className="">
        <h1 className="text-3xl">Software Engineer</h1>
        <h3 className="text-xl">
          Loren wim siwh sith gin se. Le aois ist thie siwh SKE
        </h3>
      </div>
    </div>
  );
};

export default aboutme;

import React from "react";

const aboutme = () => {
  return (
    <div>
      <div
        className="flex flex-col md:gap-40 justify-center items-center text-white h-[125rem] md:flex-row p-4"
        id="AboutMe"
      >
        <img src="/me.png" className="w-40  md:w-60 lg:w-80" />

        <div className="max-w-[43rem]">
          <h1 className="py-4 text-3xl sm:text-5xl md:text-6xl lg:text-8xl">
            About Me
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl py-2">
            Software Engineer · Developer
          </h1>
          {/* <div className="border-t-2 h-2"></div> */}
          <h3 className="text-sm sm:text-md md:text-lg lg:text-xl py-3 tracking-wide">
            I'm a computer science coop student based in the GTA with interests
            in fullstack development, game development, design and cloud
            engineering.
          </h3>
          <div className="border-t-2 h-2"></div>
          <h1 className="text-sm sm:text-md md:text-lg lg:text-xl  text-neutral-400 tracking-wide">
            Tech: Java, C++, React, Next.js, Python, JS, TS, Firebase
          </h1>
          <h1 className="text-sm sm:text-md md:text-lg lg:text-xl  text-neutral-400 tracking-wide">
            Hobbies: Piano, Skiing, Snowboarding, Powerlifting, Fashion
          </h1>
          <div className="py-4">
            <a
              href="mailto:bocsarafael@gmail.com"
              className="rounded-full border font-semibold bg-white text-black py-1 px-3"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutme;

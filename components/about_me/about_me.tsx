import React from "react";

const about_me = () => {
  return (
    <div className="flex text-neutral-400 pb-10">
      <div className=" ">
        <div className="lg:opacity-0 py-5 md:py-0">
          <h2 className="font-bold text-white pb-4">About Me</h2>
        </div>

        <div className="text-sm sm:text-md md:text-lg lg:text-xl tracking-wide ">
          22 year old final year computer science student at Brock University
          with a passion for{" "}
          <div className="inline text-white">Software Engineering</div> and{" "}
          <div className="inline text-white">Cloud Development.</div> My goal is
          to improve peoples lives through impactful digital solutions that
          solve real world problems.
        </div>
        <div className="text-sm sm:text-md md:text-lg lg:text-xl tracking-wide py-5">
          Staying in the loop about everything tech related is something I enjoy
          especially when it comes to where the digital world is moving.
        </div>
        <div className="text-sm sm:text-md md:text-lg lg:text-xl tracking-wide ">
          Outside of the office, I love to play the piano, ski, snowboard and
          even play video games such as Valorant and Fortnite with my friends!
          Growing up I always loved being challenged and the rubiks was perfect
          for stimulating my creative and problem solving side. I stopped{" "}
          <a
            href="https://www.worldcubeassociation.org/persons/2015BORS01"
            target="_blank"
            className="text-white"
          >
            competing
          </a>{" "}
          in 2018 but I still try to stay in the loop to this day.
        </div>
      </div>
    </div>
  );
};

export default about_me;

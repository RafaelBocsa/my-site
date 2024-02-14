import React from "react";
import ProjectCards from "@/components/projects/projectCards";
import { useState, useRef, useEffect } from "react";

const projects = () => {
  return (
    <div className="bg-slate-800 h-[70rem] p-10">
      <div className=" flex text-neutral-400 text-lg w-[100%] py-1">
        <h1 className="block w-[35vw] px-6">PROJECTS</h1>
        <h1 className="block w-[45vw] ">TECHNOLOGIES</h1>
        <h1 className="block w-[25vw]">TYPE</h1>
        <h1 className="block w-[10vw]">Year</h1>
      </div>

      <div className="">
        <ul className="h-full ">
          <ProjectCards
            src="/me.png"
            title="Vignere Cipher Decoder Genetic Algorithm"
            year="2023"
            tech="SWE"
            type="Personal project"
            description="Used genetic algorithms to build a Vigen`ere cipher decoder that finds the key to encrypted text over a certain
          amount of generations and population size to achieve 95% decryption accuracy"
          />
          <ProjectCards
            src="/me.png"
            title="Discord Bot"
            year="2023"
            tech="AI"
            type="University project"
            description="Used genetic algorithms to build a Vigen`ere cipher decoder that finds the key to encrypted text over a certain
          amount of generations and population size to achieve 95% decryption accuracy"
          />
        </ul>
      </div>
    </div>
  );
};

export default projects;

// import React from "react";
// import ProjectCards from "@/components/projects/projectCards";

// const Projects = [
//   {
//     id: 1,
//     name: "Project 1",
//     description: "Description for Project 1",
//     photoUrl: "/me.png",
//   },
//   {
//     id: 2,
//     name: "Project 2",
//     description: "Description for Project 2",
//     photoUrl: "project2.jpg",
//   },
//   {
//     id: 3,
//     name: "Project 3",
//     description: "Description for Project 2",
//     photoUrl: "project2.jpg",
//   },
//   {
//     id: 4,
//     name: "Project 4",
//     description: "Description for Project 2",
//     photoUrl: "project2.jpg",
//   },
//   // Add more projects as needed
// ];

// const projects: React.FC = () => {
//   return (
//     <div className="">
//       <ProjectCards projects={Projects} />
//     </div>
//   );
// };

// export default projects;

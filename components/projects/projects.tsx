import React from "react";
import ProjectCards from "@/components/projects/projectCards";
import { useState, useRef, useEffect } from "react";

const projects = () => {
  return (
    <div className="">
      <div>
        <h1 className="flex text-4xl justify-center text-white  sm:text-5xl md:text-7xl">
          SELECTED WORKS
        </h1>
      </div>

      <div className="">
        <ul className="h-full p-7">
          <ProjectCards
            indx={1}
            src="/IMG_6685.jpg"
            title="HabitForge"
            year="2024"
            tech="FULLSTACK"
            type="Team project"
            description="Used genetic algorithms to build a Vigen`ere cipher decoder that finds the key to encrypted text over a certain
          amount of generations and population size to achieve 95% decryption accuracy"
          />
          <ProjectCards
            indx={2}
            src="/IMG_5472.jpg"
            title="Island Model GP"
            year="2024"
            tech="AI"
            type="Team project"
            description="Used genetic algorithms to build a Vigen`ere cipher decoder that finds the key to encrypted text over a certain
          amount of generations and population size to achieve 95% decryption accuracy"
          />
          <ProjectCards
            indx={3}
            src="/img3.jpg"
            title="Parrot Heads in Niagara"
            year="2022"
            tech="BACKEND"
            type="Client website"
            description="Used genetic algorithms to build a Vigen`ere cipher decoder that finds the key to encrypted text over a certain
          amount of generations and population size to achieve 95% decryption accuracy"
          />
        </ul>
      </div>
    </div>
  );
};

export default projects;

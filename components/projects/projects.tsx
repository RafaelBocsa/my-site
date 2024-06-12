import React, { useLayoutEffect } from "react";
import ProjectCards from "@/components/projects/projectCards";
import Proj from "@/components/projects/projectContainer";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const projects = () => {
  const num = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".fullscreen");

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 1px",
        onToggle: (self) => {
          // animate respective list item based on active state
          gsap.to(`li:nth-child(${index + 1})`, {
            duration: 0.2,
            // visibility: self.isActive ? "visible" : "hidden", // if active then 1 or else 0.5
            opacity: self.isActive ? 1 : 0.2,
            // color: self.isActive ? "white" : "black", // if active then white or else black
          });
        },
      });
    });
  }, []);
  // const nums = useRef(null);
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const nav2 = gsap.timeline({
  //     defaults: {
  //       ease: "power4.inOut",
  //       duration: 2,
  //     },
  //     scrollTrigger: {
  //       trigger: ".numbers",
  //       start: "top",
  //       end: "+=700px",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
  //   nav2.to(nums.current, {
  //     opacity: 0,
  //   });
  // }, []);
  return (
    <div className="">
      <div>
        <h1 className="flex text-4xl justify-center text-white  sm:text-5xl md:text-7xl">
          SELECTED WORKS
        </h1>
      </div>

      <div className="">
        <div className="h-full p-2 sm:p-7">
          {/* <ul className="sticky top-0 h-fit w-full text-9xl text-black overflow-hidden invisible md:visible p-5 ">
            <div className=" flex ">
              <div className="flex-col">
                <li>01.</li>
                <li>02.</li>
                <li>03.</li>
                <li>04.</li>
              </div>
            </div>
          </ul> */}

          <div className="grid h-full grid-cols-12 md:py-20 ">
            <div className="sticky top-0 col-span-3 h-fit w-full text-9xl text-white overflow-hidden invisible md:visible p-5 ">
              <ul className="items-center flex-col">
                <li className="numbers inline-block bg-red-500 rounded-full aspect-square w-24 opacity-20"></li>
                <li className="numbers  w-0 h-0 border-solid border-t-0 border-r-[50px] border-l-[50px] border-b-[86.6px] border-l-transparent border-r-transparent border-t-transparent border-b-blue-500 opacity-20 "></li>
                <li className="numbers inline-block bg-green-500  aspect-square w-24 opacity-20"></li>
              </ul>
            </div>

            <div className=" relative col-span-12 flex flex-col gap-y-12 text-xl text-white  sm:gap-y-16 md:col-span-7 2xl:gap-y-32 ">
              <div className="fullscreen">
                <Proj
                  src="/IMG_6685.jpg"
                  vid="/HabitForge.mp4"
                  title="HabitForge"
                  link="https://www.habitforge.ca/"
                  year="2024"
                  tech="FULLSTACK"
                  type="Team project"
                  description="Used genetic algorithms to build a Vigen`ere cipher decoder that finds the key to encrypted text over a certain amount of generations and population size to achieve 95% decryption accuracy"
                ></Proj>
              </div>
              <div className="fullscreen">
                <Proj
                  src="/IMG_5472.jpg"
                  vid="/Parrots.mp4"
                  title="Island Model GP"
                  link=""
                  year="2024"
                  tech="AI"
                  type="Team project"
                  description="Used genetic algorithms to build a Vigen`ere cipher decoder that finds the key to encrypted text over a certain
                            amount of generations and population size to achieve 95% decryption accuracy"
                ></Proj>
              </div>
            </div>
          </div>
          {/* <div className="fullscreen">
            <ProjectCards
              indx={2}
              src="/IMG_5472.jpg"
              vid="/Parrots.mp4"
              title="Island Model GP"
              link=""
              year="2024"
              tech="AI"
              type="Team project"
              description="Used genetic algorithms to build a Vigen`ere cipher decoder that finds the key to encrypted text over a certain
          amount of generations and population size to achieve 95% decryption accuracy"
            />
          </div>
          <div className="fullscreen">
            <ProjectCards
              indx={3}
              src="/img3.jpg"
              vid="/Parrots.mp4"
              title="Parrot Heads in Niagara"
              link="https://www.parrotheads.ca/"
              year="2022"
              tech="BACKEND"
              type="Client website"
              description="Used genetic algorithms to build a Vigen`ere cipher decoder that finds the key to encrypted text over a certain
          amount of generations and population size to achieve 95% decryption accuracy"
            />
          </div>
          <div className="fullscreen">
            <ProjectCards
              indx={4}
              src={"/piano.jpg"}
              vid={"/aimgame.mp4"}
              title="Aim Trainer Game"
              link={"https://github.com/RafaelBocsa/Aim_Trainer"}
              tech={"Game Dev"}
              type="Personal project"
              year={"2021"}
              description="Used genetic algorithms to build a Vigen`ere cipher decoder that finds the key to encrypted text over a certain
        amount of generations and population size to achieve 95% decryption accuracy"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default projects;

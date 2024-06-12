import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Proj from "@/components/projects/projectContainer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface Details {
  indx: number;
  src: string;
  vid: string;
  title: string;
  link: string;
  tech: string;
  type: string;
  year: string;
  description: string;
}

const projectCards = ({
  indx,
  src,
  vid,
  title,
  link,
  year,
  tech,
  type,
  description,
}: Details) => {
  const nums = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const nav2 = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".numbers",
        start: "top",
        end: "+=700px",
        scrub: true,
        markers: true,
      },
    });
    // nav2.to(nums.current, {
    //   opacity: 0,
    // });
  }, []);
  return (
    <div className=" grid h-full grid-cols-12 md:py-20">
      {/* <div
        ref={nums}
        className="sticky top-0 col-span-3 h-fit w-full text-9xl text-white overflow-hidden invisible md:visible p-5 numbers"
      >
        <span className="">0</span>
        <span>{indx}</span>
        <span>.</span>
      </div> */}

      <div className="relative col-span-12 flex flex-col gap-y-12 text-xl text-white  sm:gap-y-16 md:col-span-7 2xl:gap-y-32 ">
        <div className="">
          <Proj
            src={src}
            vid={vid}
            title={title}
            year={year}
            link={link}
            tech={tech}
            type={type}
            description={description}
          ></Proj>
        </div>
      </div>
    </div>
  );
};

export default projectCards;

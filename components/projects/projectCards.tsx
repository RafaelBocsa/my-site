import React from "react";
import Image from "next/image";
import Proj from "@/components/projects/projectContainer";

interface Details {
  indx: number;
  src: string;
  title: string;
  tech: string;
  type: string;
  year: string;
  description: string;
}

const projectCards = ({
  indx,
  src,
  title,
  year,
  tech,
  type,
  description,
}: Details) => {
  return (
    <div className=" grid h-full grid-cols-12 md:py-20">
      <div className="sticky top-0 col-span-3 h-fit w-full text-9xl text-white overflow-hidden  invisible md:visible">
        <span className="">0</span>
        <span>{indx}</span>
        <span>.</span>
      </div>

      <div className="relative col-span-12 flex flex-col gap-y-12 text-xl text-white  sm:gap-y-16 md:col-span-7 2xl:gap-y-32 ">
        <div className="">
          <Proj
            src={src}
            title={title}
            year={year}
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

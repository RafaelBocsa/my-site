import React from "react";
import Image from "next/image";

interface Details {
  src: string;
  vid: string;
  title: string;
  link: string;
  tech: string;
  type: string;
  year: string;
}

const projectContainer = ({
  src,
  vid,
  title,
  link,
  year,
  tech,
  type,
}: Details) => {
  return (
    <div className="">
      <div className=" flex items-center justify-center p-4 ">
        <img
          src={src}
          alt=""
          className=" opacity-40 rounded-md w-full aspect-square relative object-cover "
        />
        <video
          src={vid}
          autoPlay
          loop
          muted
          className="absolute items-center justify-center rounded-md w-4/5 aspect-video object-cover object-bottom"
        ></video>
      </div>
      <div className="flex justify-between gap-y-4 px-4 flex-col md:flex-row">
        <div className="flex flex-col gap-y-1 ">
          <span className=" text-sm font-medium 2xl:text-base">{type}</span>
          <h3 className=" font-semibold xl:text-3xl">{title}</h3>
        </div>
        <div className=" flex items-end text-xs font-medium uppercase md:text-md 2xl:text-base flex-row ">
          <span className="flex h-fit items-center justify-center gap-x-2">
            <a
              href={link}
              className="rounded-full border px-3 text-sm"
              target="_blank"
            >
              View
            </a>
            <span className="rounded-full border px-3 text-sm whitespace-nowrap">
              {tech}
            </span>
          </span>
          <span className="ml-2 flex h-fit items-center justify-center rounded-full border text-sm font-semibold bg-white text-black px-3 ">
            {year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default projectContainer;

import React from "react";
import Link from "next/link";

const navbar = () => {
  return (
    <div className="flex justify-between p-10 items-center gap-5 text-white h-1 ">
      <div className="flex gap-5 fixed z-30">
        <Link
          href={"#AboutMe"}
          className="text-lg font-bold sm:block hover:brightness-100 z-70"
        >
          About
        </Link>
        <Link
          href={"/"}
          className="text-lg font-bold sm:block hover:brightness-50 "
        >
          Projects
        </Link>
        <Link
          href={"/"}
          className="text-lg font-bold sm:block hover:brightness-50 "
        >
          Contact
        </Link>
      </div>
      {/* <h1 className="text-lg font-bold ">Rafael Bocsa</h1> */}
      <div className=" flex end-5 gap-5 fixed z-30">
        <a href="https://github.com/RafaelBocsa" target="_blank">
          <img
            src="/gitwhite.png"
            alt=""
            className=" h-8 hover:brightness-50 z-30"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-bocsa-aa2588222/"
          target="_blank"
        >
          <img
            src="/In-White-128.png"
            alt=""
            className="h-8 hover:brightness-50 "
          />
        </a>
      </div>
    </div>
  );
};

export default navbar;

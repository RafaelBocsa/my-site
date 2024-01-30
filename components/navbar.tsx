import React from "react";

const navbar = () => {
  return (
    <div className="flex justify-between p-8 items-center text-white h-1">
      <div className="flex justify-between flex gap-5">
        <h1 className="text-lg font-bold sm:block">About</h1>
        <h1 className="text-lg font-bold sm:block">Projects</h1>
        <h1 className="text-lg font-bold sm:block">Contact</h1>
      </div>
      {/* <h1 className="text-lg font-bold ">Rafael Bocsa</h1> */}
      <div className=" flex gap-4">
        <a href="https://github.com/RafaelBocsa">
          <img src="/gitwhite.png" alt="" className=" h-8" />
        </a>
        <a href="https://www.linkedin.com/in/rafael-bocsa-aa2588222/">
          <img src="/In-White-128.png" alt="" className="h-8" />
        </a>
      </div>
    </div>
  );
};

export default navbar;

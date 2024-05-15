import React from "react";

const footer = () => {
  return (
    <div className="flex justify-center items-center  h-80">
      <div className=" flex gap-5  items-center">
        <div className="flex gap-5 border-r-4 px-4 ">
          <img src="/favicon.ico" alt="" className="h-8 hover:brightness-50 " />
          <h1 className="text-white text-2xl  ">2024</h1>
        </div>

        <div className="flex gap-5  items-center">
          <a href="mailto:bocsarafael@gmail.com" target="_blank">
            <img
              src="/icons8-email-96.png"
              alt=""
              className="h-8 hover:brightness-50 "
            />
          </a>
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
    </div>
  );
};

export default footer;

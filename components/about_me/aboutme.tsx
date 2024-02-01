import React from "react";

const aboutme = () => {
  return (
    <div
      className="flex gap-40 grid-cols-2 grid-rows-1 justify-center py-80 text-white h-lvh"
      id="AboutMe"
    >
      <div className="px-20">
        <img src="/me.png" className=" w-80" />
      </div>
      <div className="px-20">
        <h1 className="text-3xl">Software Engineer</h1>
        <h3 className="text-xl">Loren wim siwh sith gin se</h3>
      </div>
    </div>
  );
};

export default aboutme;

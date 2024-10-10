import React from "react";
import Footer from "@/components/footer/footer";

const sidecard = () => {
  return (
    <div className="justify-center text-white py-4 lg:py-24 sticky top-0">
      <div className="">
        <div className="sticky">
          <h1 className="text-4xl  md:text-5xl lg:text-6xl  font-bold">
            Rafael Bocsa
          </h1>
          <h1 className="text-xl sm:text-xl md:text-xl lg:text-2xl py-2">
            Software Engineer
          </h1>
          <h1 className="text-sm sm:text-md md:text-lg lg:text-xl py-2 text-neutral-400 tracking-wide">
            Toronto, Canada
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default sidecard;

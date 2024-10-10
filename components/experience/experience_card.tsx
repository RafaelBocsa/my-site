import React from "react";

interface Details {
  year: string;
  company: string;
  position: string;
  location: string;
  description: string;
}

const experience_card = ({
  year,
  company,
  position,
  location,
  description,
}: Details) => {
  return (
    <div className="group relative grid pb-12 sm:grid-cols-8 sm:gap-8 md:gap-4 ">
      <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-400 sm:col-span-2">
        {year}
      </header>
      <div className="sm:col-span-6">
        <h1 className="font-medium leading-snug text-white">
          {position} @ {company}
        </h1>
        <h1 className="font-medium leading-snug text-neutral-400">
          {location}
        </h1>
        <p className="mt-2 text-sm leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default experience_card;

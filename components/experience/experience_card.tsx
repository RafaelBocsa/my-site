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
      <header className="text-xs font-semibold uppercase tracking-wide text-neutral-400 sm:col-span-2">
        {year}
      </header>
      <div className="sm:col-span-6">
        <h1 className="font-medium leading-snug text-white">
          {position} @ {company}
        </h1>
        <h1 className="font-medium leading-snug text-neutral-400 flex flex-row items-center gap-1">
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {location}
        </h1>
        <p className="mt-2 text-sm leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default experience_card;

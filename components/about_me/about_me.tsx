import React from "react";

const about_me = () => {
  return (
    <div className="flex flex-col text-neutral-400 ">
      <div className=" ">
        <div className="lg:opacity-0 pt-5 md:py-0">
          <h2 className="font-semibold text-white pb-4 flex flex-row items-center gap-2">
            About Me
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 14V10.5M12 7H12.01M9.9 19.2L11.36 21.1467C11.5771 21.4362 11.6857 21.5809 11.8188 21.6327C11.9353 21.678 12.0647 21.678 12.1812 21.6327C12.3143 21.5809 12.4229 21.4362 12.64 21.1467L14.1 19.2C14.3931 18.8091 14.5397 18.6137 14.7185 18.4645C14.9569 18.2656 15.2383 18.1248 15.5405 18.0535C15.7671 18 16.0114 18 16.5 18C17.8978 18 18.5967 18 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C21 15.5967 21 14.8978 21 13.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V13.5C3 14.8978 3 15.5967 3.22836 16.1481C3.53284 16.8831 4.11687 17.4672 4.85195 17.7716C5.40326 18 6.10218 18 7.5 18C7.98858 18 8.23287 18 8.45951 18.0535C8.76169 18.1248 9.04312 18.2656 9.2815 18.4645C9.46028 18.6137 9.60685 18.8091 9.9 19.2Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>
        </div>

        <div className="text-sm sm:text-md md:text-lg lg:text-xl tracking-wide ">
          I'm a 23 year old computer science new grad from Brock University with
          a passion for{" "}
          <div className="inline text-white">Software Engineering, Cloud</div>{" "}
          and <div className="inline text-white">Game Development.</div> My goal
          is to improve peoples lives through impactful digital solutions that
          solve real world problems.
        </div>
        <div className="text-sm sm:text-md md:text-lg lg:text-xl tracking-wide py-5">
          Staying in the loop about everything tech related is something I enjoy
          especially when it comes to where the digital world is moving.
        </div>
        <div className="text-sm sm:text-md md:text-lg lg:text-xl tracking-wide ">
          Outside of the office, I love to play the piano, ski, snowboard and
          even play video games such as Valorant and Fortnite with my friends!
          Growing up I always loved being challenged and the rubiks was perfect
          for stimulating my creative and problem solving side. I stopped{" "}
          <a
            href="https://www.worldcubeassociation.org/persons/2015BORS01"
            target="_blank"
            className="text-white"
          >
            competing
          </a>{" "}
          in 2018 but I still try to stay in the loop to this day.
        </div>
      </div>
      {/* <div className="flex flex-col pt-20">
        <div className="group relative grid pb-12 sm:grid-cols-8 sm:gap-8 md:gap-4 ">
          <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-400 sm:col-span-2">
            2020 — DEC. 2024
          </header>
          <div className="sm:col-span-6">
            <h1 className="font-medium leading-snug text-white">
              Bachelor of Science in Computer Science (Honors)
            </h1>
            <h1 className="font-medium leading-snug text-neutral-400 flex flex-row gap-1">
              Brock University
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 14.5001V11.4945C17 11.315 17 11.2253 16.9727 11.146C16.9485 11.076 16.9091 11.0122 16.8572 10.9592C16.7986 10.8993 16.7183 10.8592 16.5578 10.779L12 8.50006M4 9.50006V16.3067C4 16.6786 4 16.8645 4.05802 17.0274C4.10931 17.1713 4.1929 17.3016 4.30238 17.4082C4.42622 17.5287 4.59527 17.6062 4.93335 17.7612L11.3334 20.6945C11.5786 20.8069 11.7012 20.8631 11.8289 20.8853C11.9421 20.9049 12.0579 20.9049 12.1711 20.8853C12.2988 20.8631 12.4214 20.8069 12.6666 20.6945L19.0666 17.7612C19.4047 17.6062 19.5738 17.5287 19.6976 17.4082C19.8071 17.3016 19.8907 17.1713 19.942 17.0274C20 16.8645 20 16.6786 20 16.3067V9.50006M2 8.50006L11.6422 3.67895C11.7734 3.61336 11.839 3.58056 11.9078 3.56766C11.9687 3.55622 12.0313 3.55622 12.0922 3.56766C12.161 3.58056 12.2266 3.61336 12.3578 3.67895L22 8.50006L12.3578 13.3212C12.2266 13.3868 12.161 13.4196 12.0922 13.4325C12.0313 13.4439 11.9687 13.4439 11.9078 13.4325C11.839 13.4196 11.7734 13.3868 11.6422 13.3212L2 8.50006Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h1>
            <p className="mt-2 text-sm leading-normal">test</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default about_me;

import Proj from "@/components/projects/projectContainer";

const projects = () => {
  return (
    <div className="h-full text-white pt-12">
      <h1 className="flex justify-center font-bold sm:text-3xl md:text-4xl">
        SELECTED WORKS
      </h1>
      <div className="grid h-full grid-cols-10 md:py-20 ">
        <div className=" relative col-span-12 flex flex-col gap-y-20 text-xl   sm:gap-y-16 md:col-span-10 2xl:gap-y-32 ">
          <Proj
            src="/photos/IMG_4.jpg"
            vid="/vids/FN_vid_2.mp4"
            title="FNCS Trio Builder"
            link="https://www.fntriobuilder.xyz/"
            year="2025"
            tech="FULLSTACK"
            type="Personal project"
          ></Proj>
          <Proj
            src="/photos/IMG_6685.jpg"
            vid="/vids/HabitForge.mp4"
            title="HabitForge"
            link="https://github.com/a-patel02/4P02_Winter_2024"
            year="2024"
            tech="FULLSTACK"
            type="Team project"
          ></Proj>

          <Proj
            src="/photos/IMG_5472.jpg"
            vid="/vids/Parrots.mp4"
            title="Parrot Heads in Niagara"
            link="https://www.parrotheads.ca/"
            year="2022"
            tech="FULLSTACK"
            type="Team project"
          ></Proj>

          <Proj
            src={"/photos/piano.jpg"}
            vid={"/vids/aimgame.mp4"}
            title="Aim Trainer Game"
            link={"https://rafaelbocsa.github.io/Aim_Trainer/"}
            tech={"Game Dev"}
            type="Personal project"
            year={"2021"}
          ></Proj>

          <div className=" text-white ">
            <a
              href="https://github.com/RafaelBocsa"
              target="_blank"
              className="flex flex-row items-center gap-2 text-lg md:text-xl"
            >
              → View My Other Projects
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          {/* <div className="text-neutral-400 pt-36 text-sm tracking-wide leading-snug max-w-md">
            Designed and coded in{" "}
            <div className="inline text-white">VS Code</div>. Built with{" "}
            <div className="inline text-white">React.JS,</div>{" "}
            <div className="inline text-white">Next.JS,</div>{" "}
            <div className="inline text-white">Tailwind CSS</div> and deployed
            with <div className="inline text-white">Vercel.</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default projects;

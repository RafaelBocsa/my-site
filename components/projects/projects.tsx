import Proj from "@/components/projects/projectContainer";

const projects = () => {
  return (
    <div className="h-full text-white pt-12">
      <h1 className="flex justify-center font-bold sm:text-3xl md:text-4xl">
        SELECTED WORKS
      </h1>
      <div className="grid h-full grid-cols-10 md:py-20 ">
        <div className=" relative col-span-12 flex flex-col gap-y-12 text-xl   sm:gap-y-16 md:col-span-10 2xl:gap-y-32 ">
          <Proj
            src="/IMG_6685.jpg"
            vid="/HabitForge.mp4"
            title="HabitForge"
            link="https://www.habitforge.ca/"
            year="2024"
            tech="FULLSTACK"
            type="Team project"
          ></Proj>

          <Proj
            src="/IMG_5472.jpg"
            vid="/Parrots.mp4"
            title="Parrot Heads in Niagara"
            link="https://www.parrotheads.ca/"
            year="2022"
            tech="FULLSTACK"
            type="Team project"
          ></Proj>

          <Proj
            src={"/piano.jpg"}
            vid={"/aimgame.mp4"}
            title="Aim Trainer Game"
            link={"https://rafaelbocsa.github.io/Aim_Trainer/"}
            tech={"Game Dev"}
            type="Personal project"
            year={"2021"}
          ></Proj>

          <div className=" text-neutral-400 ">
            <a href="https://github.com/RafaelBocsa" target="_blank">
              View My Other Projects →
            </a>
          </div>
          <div className="text-neutral-400 pt-36 text-sm tracking-wide leading-snug max-w-md">
            Designed with love and coded in{" "}
            <div className="inline text-white">VS Code</div> by yours truly.
            Built with <div className="inline text-white">React.JS,</div>{" "}
            <div className="inline text-white">Next.JS,</div>{" "}
            <div className="inline text-white">Tailwind CSS</div> and deployed
            with <div className="inline text-white">Vercel.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;

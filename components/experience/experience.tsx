import React from "react";
import Exp_card from "@/components/experience/experience_card";

const experience = () => {
  return (
    <div className="flex text-neutral-400 py-12">
      <div className="relative ">
        <div className="lg:opacity-0 py-5 md:py-0">
          <h2 className="font-bold text-white pb-4">Experience</h2>
        </div>
        <Exp_card
          year="JUNE 2024 — Present"
          company="HIEC"
          position="Web Developer"
          location="Burlington, ON"
          description="
          Developed/designed web components in Wordpress using Elementor via collaboration with Marketing, Finance
          and HR teams. Created custom JS and JQUERY code for specific web elements to enhance visual design, backend functionality
          and site responsiveness. Redesigned policy page and implemented user feedback while ensuring safety and security."
        ></Exp_card>
        <Exp_card
          year="SEPT — DEC 2022"
          company="Government of Ontario"
          position="Junior Full-Stack Developer"
          location="St. Catharines, ON"
          description="Researched new and trending software’s and technologies that could benefit the government to push the digital
        service transformation agenda for our clients. Implemented a proof of concept lab report on web development best practices by researching and learning emerging
        technologies such as OutSystems, Flutter/Dart, Firebase, PWA.
        "
        ></Exp_card>
        <Exp_card
          year="JAN — APR 2022"
          company="Civiconnect"
          position="Junior Full-Stack Developer"
          location="Beamsvile, ON"
          description="Worked in a dynamic team environment of 3 to support front-end development and built back-end web
        functionalities for local businesses using Python, Django, PostgreSQL and AWS. Worked to suit clients’ needs under tight time constraints, troubleshoot, debug, support web dev teams, maintain
        web services, and presented final product to clients showcasing all back end admin functionalities.
        "
        ></Exp_card>
        <div className="py-10">
          <a href="public\RafaelBocsa_Resume.pdf" download target="_blank">
            View Full Résumé →
          </a>
        </div>
      </div>
    </div>
  );
};

export default experience;

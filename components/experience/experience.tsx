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
          year="JUNE — AUG 2024"
          company="HIEC"
          position="Web Developer"
          location="Burlington, ON"
          description="Created custom JS and JQUERY code for specific web elements, enhancing visual design and backend
          functionalities. Spearheaded the redesign of a new policy page and user feedback function, prioritizing safety and security.
          Initiated major front and backend changes to site components, optimizing space usage and page redirects. Collaborated in pair programming to debug code, optimize routes and troubleshoot api calls in a RubyOnRails
          environment for better user flows."
        ></Exp_card>
        <Exp_card
          year="SEPT — DEC 2022"
          company="Government of Ontario"
          position="Software Developer Intern"
          location="St. Catharines, ON"
          description="Accomplished a proof of concept lab report on web development best practices to over 30 public servants by
          utilizing emerging technologies such as OutSystems, Flutter/Dart, Firebase, and PWA. Developed an automated attendance checker, reducing manual attendance monitoring efforts by 60% and providing
          real-time updates via PowerApps. Explored new software and technologies to drive digital service transformation for clients by investigation creative
          digital solutions, delving into complex problems to derive insights, prototype, and validate with end users.
        "
        ></Exp_card>
        <Exp_card
          year="JAN — APR 2022"
          company="Civiconnect"
          position="Software Developer Intern"
          location="Beamsvile, ON"
          description="Developed and deployed end-to-end websites for local businesses utilizing Django, PostgreSQL, and AWS.
           Engineered backend services with Django to facilitate 50% faster content updates through the admin dashboard.
           Demonstrated functional backend features punctually, ensuring 100% client satisfaction and addressing needs within tight deadlines.
        "
        ></Exp_card>
        {/* <div className="py-10">
          <a href="public\RafaelBocsa_Resume.pdf" download target="_blank">
            View Full Résumé →
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default experience;

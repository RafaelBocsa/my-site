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
          year="JUN. — AUG. 2024"
          company="HIEC"
          position="Web Developer"
          location="Burlington, ON"
          description="Designed and launched an archive system used by admins to manage 20+ programs and events, improving content organization and reducing page 
          retrieval time through optimized WordPress archive blocks. Migrated a legacy Ruby on Rails codebase to Tailwind CSS (60% completion) through pair programming 
          with senior developers, enhancing UI consistency and maintainability. Redeveloped the policy page and user feedback workflow to meet AODA accessibility standards 
          by writing custom JavaScript/JQUERY components in Elementor, increasing accessibility compliance and user engagement."
        ></Exp_card>
        <Exp_card
          year="SEPT. — DEC. 2022"
          company="Government of Ontario"
          position="Software Developer Intern"
          location="St. Catharines, ON"
          description="Built an automated attendance tracking system that emailed Excel reports to 300+ employees, reducing manual monitoring workload 
          by 60% using PowerApps and automated validation logic. Produced a proof-of-concept report on modern web architecture (Flutter, Firebase, OutSystems, PWAs) 
          and delivered a technical seminar to 30+ public servants, guiding future modernization initiatives. Documented workflows, architecture diagrams, 
          and testing steps in internal runbooks to standardize adoption of emerging technologies across the division.
        "
        ></Exp_card>
        <Exp_card
          year="JAN. — APR. 2022"
          company="Civiconnect"
          position="Software Developer Intern"
          location="Beamsville, ON"
          description="Engineered backend services with Django to facilitate 50% faster content updates through the admin dashboard. Developed and deployed 
          end-to-end websites aiding 20+ local businesses in the Lincoln region utilizing Django, PostgreSQL, and AWS, translating business requirements into custom 
          technical solutions. Created documentation and repeatable deployment steps to streamline the agency’s future client project onboarding.
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

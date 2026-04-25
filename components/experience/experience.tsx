import React from "react";
import Exp_card from "@/components/experience/experience_card";

const experience = () => {
  return (
    <div className="flex flex-col text-neutral-400 py-12">
      {/* <div className="flex flex-row justify-center items-center gap-3">
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <path
            d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M16 13H8M16 17H8M10 9H8M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Experience</p>
      </div> */}
      <div className="lg:opacity-0 pt-5 md:py-0">
        <h2 className="font-semibold text-white pb-4 flex flex-row gap-2 items-center">
          Experience
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <path
              d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M16 13H8M16 17H8M10 9H8M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h2>
      </div>
      <Exp_card
        year="JUN. — AUG. 2024"
        company="HIEC"
        position="Web Developer Intern"
        location="Burlington, ON"
        description="Designed and launched an archive system used by admins to manage 20+ programs and events for workforce development, improving content organization and reducing page retrieval time through WordPress archive blocks. 
          Migrated a legacy Ruby on Rails codebase to Tailwind CSS (60% completion) through pair programming with senior developers, enhancing UI consistency empowering Ontario’s future skilled trades.
          Redeveloped the policy page and user feedback workflow to meet AODA accessibility standards by writing custom JavaScript/JQUERY components in Elementor, increasing accessibility compliance and user engagement."
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
      <div className="py-10">
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg md:text-xl flex flex-row items-center gap-2"
        >
          → View Full Resume
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <path
              d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M16 13H8M16 17H8M10 9H8M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default experience;

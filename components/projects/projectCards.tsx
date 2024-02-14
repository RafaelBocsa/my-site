import React from "react";
import Image from "next/image";

interface Details {
  src: string;
  title: string;
  tech: string;
  type: string;
  year: string;
  description: string;
}

const projectCards = ({
  src,
  title,
  year,
  tech,
  type,
  description,
}: Details) => {
  return (
    <div className="">
      <div className="text-xl text-white flex white-[#2A0E61] w-[100%] border-t-2 py-1">
        <h1 className="block w-[35vw] px-6">{title}</h1>
        <h1 className="block w-[45vw] ">{tech}</h1>
        <h1 className="block w-[25vw]">{type}</h1>
        <h1 className="block w-[10vw]">{year}</h1>
      </div>

      <div className="">
        {/* <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-80"
        /> */}
        <div className="">
          {/* <h1 className="text-2xl font-semibold text-white">{title}</h1> */}
          {/* <p className="mt-2 text-gray-300">{description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default projectCards;

// import React, { useState } from "react";

// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   photoUrl: string;
// }

// interface DropdownProps {
//   projects: Project[];
// }

// const projectCards: React.FC<DropdownProps> = ({ projects }) => {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   const handleProjectSelect = (project: Project) => {
//     setSelectedProject(project === selectedProject ? null : project);
//   };

//   return (
//     <div className="">
//       <button className="">Select a Project</button>
//       <ul className="text-2xl font-semibold text-white">
//         {projects.map((project) => (
//           <li key={project.id}>
//             <button onClick={() => handleProjectSelect(project)}>
//               {project.name}
//             </button>
//             {selectedProject && selectedProject.id === project.id && (
//               <div className="mt-2 text-gray-300">
//                 <img
//                   src={project.photoUrl}
//                   alt={project.name}
//                   className="w-[20%]"
//                 />
//                 <p className="p-9">{project.description}</p>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default projectCards;

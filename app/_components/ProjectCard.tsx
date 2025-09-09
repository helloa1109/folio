import React from 'react';
import { Project as ProjectType } from '../types/project';

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="group relative h-[300px] w-[450px] rounded-2xl border border-gray-300 flex flex-col p-6">
      <h3 className="text-3xl font-semibold mb-4 text-neutral-900 leading-tight">
        {project.title}
      </h3>
      
      <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
        <p className="text-base text-gray-700 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
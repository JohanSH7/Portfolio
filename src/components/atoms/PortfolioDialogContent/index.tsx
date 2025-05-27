import React from "react";
import Button from "@/components/atoms/Button";

export interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  imageSrc: string;
  technologies: string[];
  link: string;
}

interface Props {
  project: ProjectDetails;
}

const Index = ({ project }: Props) => (
  <div>
    <div className="mb-4 overflow-hidden">
      <img
        src={project.imageSrc || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-auto"
      />
    </div>
    <p className="text-[#767676] mb-4">{project.fullDescription}</p>

    <div className="mb-4">
      <h4 className="font-medium mb-2">Technologies Used:</h4>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span key={i} className="bg-[#f0f0f6] text-[#767676] text-xs px-2 py-1 rounded">{tech}</span>
        ))}
      </div>
    </div>

    <Button onClick={() => window.open(project.link, "_blank")} className="w-full">
      View Project
    </Button>
  </div>
);

export default Index;

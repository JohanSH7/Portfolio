import React, { useRef, useEffect, useState } from "react";
import PortfolioCard from "@/components/molecules/Portfolio/PortfolioCard";
import type { ProjectDetails } from "@/components/atoms/PortfolioDialogContent";

interface Props {
  projects: ProjectDetails[];
  onSelectProject: (project: ProjectDetails) => void;
}

/**
 * PortfolioCarousel molecule component
 * Displays a horizontal, auto-scrolling carousel of PortfolioCard molecules for the portfolio section.
 * Integrates with PortfolioCard (molecule) to render each project and passes click handlers to open project dialogs in the parent organism.
 * Provides navigation arrows and auto-scrolls, pausing on hover for better UX.
 * Used by PortfolioSection organism to showcase multiple projects interactively.
 *
 * Props:
 *   projects (ProjectDetails[]): List of project data.
 *   onSelectProject (function): Handler to select a project (e.g., open dialog in parent).
 */
const Index = ({ projects, onSelectProject }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState<"normal" | "slow">("normal");
  const [direction, setDirection] = useState<"right" | "left">("right");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        const container = scrollRef.current;
        if (container) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          const step = scrollSpeed === "normal" ? 1 : 0.5;
          if (direction === "right") {
            if (container.scrollLeft >= maxScroll - 5) setDirection("left");
            else container.scrollLeft += step;
          } else {
            if (container.scrollLeft <= 5) {
              setDirection("right");
            } else {
              container.scrollLeft -= step;
            }
          }
        }
      }, 30);

      return () => clearInterval(intervalRef.current!);
    }
    clearInterval(intervalRef.current!);
  }, [isHovered, direction, scrollSpeed]);

  const handleArrow = (dir: "left" | "right") => {
    setDirection(dir);
    setScrollSpeed("slow");
    setTimeout(() => setScrollSpeed("normal"), 5000);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Left navigation arrow */}
      <button className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md" onClick={() => handleArrow("left")}>&larr;</button>

      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f0f0f6] to-transparent z-[1] pointer-events-none" />

      {/* Scrollable carousel of PortfolioCards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto py-8 px-8 hide-scrollbar relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {projects.map(project => (
          <PortfolioCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            onClick={() => onSelectProject(project)}
            className="mx-4 first:ml-8 last:mr-8"
          />
        ))}
      </div>

      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f0f0f6] to-transparent z-[1] pointer-events-none" />

      {/* Right navigation arrow */}
      <button className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md" onClick={() => handleArrow("right")}>&rarr;</button>
    </div>
  );
};

export default Index;

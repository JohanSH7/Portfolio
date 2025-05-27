import { useState } from "react";
import Image from "next/image";
import DescriptionText from "@/components/atoms/DescriptionText";

interface PortfolioCardProps {
  title: string;
  description: string;
  imageSrc: string;
  onClick: () => void;
  className?: string;
}

/**
 * PortfolioCard molecule component
 * Displays a project card with image, title, and description for the portfolio section.
 * Used by PortfolioCarousel molecule to render each project in a horizontal scrollable list.
 * Integrates with DescriptionText atom for consistent text styling.
 * Triggers parent actions (e.g., open project dialog) via onClick prop.
 *
 * Props:
 *   title (string): Project title.
 *   description (string): Short project description.
 *   imageSrc (string): Project image path.
 *   onClick (function): Handler for card click (e.g., open dialog).
 *   className (string): Additional CSS classes.
 */
const Index = ({ title, description, imageSrc, onClick, className = "" }: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-white border border-background cursor-pointer overflow-hidden min-w-[300px] max-w-[350px] mx-3 transition-transform duration-300 transform ${
        isHovered ? "-translate-y-2 shadow-lg" : "shadow-sm"
      } ${className}`}
    >
      <div className="relative h-[220px] w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="font-medium text-xl mb-3 text-[#2b2b2b]">{title}</h3>
        <DescriptionText text={description} className="mb-0" />
      </div>
    </div>
  );
};

export default Index;

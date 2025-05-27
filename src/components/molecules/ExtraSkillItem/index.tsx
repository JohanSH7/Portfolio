import type React from "react";

/**
 * ExtraSkillItem molecule component
 * Displays an icon and label for an extra skill (e.g., Machine Learning, DevOps).
 * Used in the sidebar to highlight additional skills.
 *
 * Props:
 *   skill (string): Name of the skill.
 *   icon (ReactNode): Icon representing the skill.
 */
interface ExtraSkillItemProps {
  skill: string;
  icon: React.ReactNode;
}

const Index = ({ skill, icon }: ExtraSkillItemProps) => {
  return (
    <div className="flex items-center mb-2">
      <span className="mr-2">{icon}</span>
      <span className="text-sm paragraph-gray">{skill}</span>
    </div>
  );
};

export default Index;

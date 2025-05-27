import React from "react";
import ProgressBar from "@/components/atoms/ProgressBar";

interface ProgressItemProps {
  label: string;
  percentage: number;
  animated?: boolean;
  height?: number;
}

/**
 * ProgressItem molecule component
 * Displays a labeled progress bar for skills or language proficiency.
 * Uses the ProgressBar atom for rendering the bar.
 *
 * Props:
 *   label (string): The label for the skill or language.
 *   percentage (number): The progress percentage (0-100).
 *   animated (boolean): Whether the bar animates (default: true).
 *   height (number): Height of the progress bar (default: 8).
 */
const Index = ({ 
  label, 
  percentage, 
  animated = true,
  height = 8 // Default height
}: ProgressItemProps) => {
  return (
    <div className="mb-2"> {/* More spacing between items */}
      <ProgressBar 
        percentage={percentage}
        label={label}
        showPercentage={true}
        animated={animated}
        height={height}
      />
    </div>
  );
};

export default Index;
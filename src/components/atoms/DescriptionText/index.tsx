import React from 'react'
interface DescriptionTextProps {
  text: string
  className?: string
}

/**
 * DescriptionText atom component
 * Renders a paragraph of description text with consistent styling.
 * Used for reusable description blocks in the UI.
 *
 * Props:
 *   text (string): The description content.
 *   className (string): Additional CSS classes.
 */
const Index = ({ text, className = "" }: DescriptionTextProps) => {
  return <p className={`text-gray leading-relaxed ${className}`}>{text}</p>
}

export default Index

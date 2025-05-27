import { useState } from "react"
import type React from "react"
import ActionButton from "@/components/atoms/ActionButton"

interface KnowledgeCardProps {
  title: string
  description: string
  detailedDescription: string
  icon: React.ReactNode
  actionText?: string
  onAction?: () => void
}

/**
 * KnowledgeCard molecule component
 * Displays a square card with an icon, title, and description for a knowledge area.
 * On hover, reveals a detailed description and an action button (ActionButton atom).
 * Used by KnowledgeGrid molecule (which arranges multiple KnowledgeCards) in the KnowledgeSection organism.
 * Integrates with parent components by triggering actions (e.g., opening a dialog) via the onAction prop.
 *
 * Props:
 *   title (string): Card title.
 *   description (string): Short description.
 *   detailedDescription (string): Shown on hover.
 *   icon (ReactNode): Icon for the knowledge area.
 *   actionText (string): Button text (optional).
 *   onAction (function): Handler for action button (optional).
 */
const Index = ({ 
  title, 
  description, 
  detailedDescription, 
  icon, 
  actionText, 
  onAction 
}: KnowledgeCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white shadow-sm flex flex-col items-center text-center border border-background transition-all duration-300 hover:shadow-md relative aspect-square overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default state */}
      <div
        className={`flex flex-col items-center justify-center w-full h-full p-6 transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="mb-6 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <h3 className="section-h4 mb-3 text-center">{title}</h3>
        <p className="content-paragraph text-center text-sm leading-relaxed">{description}</p>
      </div>

      {/* Hover state */}
      <div
        className={`absolute inset-0 bg-white p-6 flex flex-col items-center justify-center transition-all duration-300 transform ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{ boxShadow: isHovered ? "0 10px 30px rgba(0,0,0,0.1)" : "none" }}
      >
        <h3 className="section-h4 mb-4 text-center">{title}</h3>
        <p className="content-paragraph mb-6 text-center text-sm leading-relaxed">
          {detailedDescription}
        </p>
        {actionText && onAction && (
          <ActionButton onClick={onAction}>{actionText}</ActionButton>
        )}
      </div>
    </div>
  )
}

export default Index
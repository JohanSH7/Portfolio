import React from "react"
interface ContactItemProps {
  label: string
  value: string | number
  highlight?: boolean
}

/**
 * ContactItem molecule component
 * Displays a label and value for contact or profile information.
 * Optionally highlights the value (e.g., for availability).
 * Used in sidebars and profile sections.
 *
 * Props:
 *   label (string): The label for the contact info.
 *   value (string | number): The value to display.
 *   highlight (boolean): If true, highlights the value (default: false).
 */
const Index = ({ label, value, highlight = false }: ContactItemProps) => {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="paragraph-black">{label}:</span>
      <span className={highlight ? "paragraph-available" : "paragraph-gray"}>{value}</span>
    </div>
  )
}

export default Index

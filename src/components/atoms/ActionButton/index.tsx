import type React from "react"
import Link from "next/link"

interface ActionButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: (e?: React.MouseEvent) => void
  className?: string
}

/**
 * ActionButton atom component
 * Renders a styled link or button for actions (e.g., 'Order Now', 'Learn More').
 * Used by KnowledgeCard and other molecules for interactive actions.
 * Decides between <Link> and <button> based on props.
 *
 * Props:
 *   children (ReactNode): Button/link content.
 *   href (string): If provided, renders as a link.
 *   onClick (function): If provided, renders as a button.
 *   className (string): Additional CSS classes.
 */
const Index = ({ children, href, onClick, className = "" }: ActionButtonProps) => {
  const buttonContent = (
    <span className={`order-link flex items-center ${className}`}>
      {children} <span className="ml-1">&rarr;</span>
    </span>
  )

  // Only use Link if href is explicitly provided
  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    )
  }

  // Use button for onClick handlers
  return (
    <button 
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick?.(e)
      }} 
      className="inline-block bg-transparent border-none p-0 cursor-pointer"
      type="button"
    >
      {buttonContent}
    </button>
  )
}

export default Index
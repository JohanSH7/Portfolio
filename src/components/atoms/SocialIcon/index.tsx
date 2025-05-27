import type React from "react"
import Link from "next/link"

interface SocialIconProps {
  href: string
  icon: React.ReactNode
  label: string
  className?: string
}

/**
 * SocialIcon atom component
 * Renders a clickable social media icon as a link.
 * Used by SocialIconGroup molecule to display a set of social links in the RightSidebar organism and elsewhere.
 *
 * Props:
 *   href (string): URL to open.
 *   icon (ReactNode): Icon to display.
 *   label (string): Accessible label for the link.
 *   className (string): Additional CSS classes.
 */
const Index = ({ href, icon, label, className = "" }: SocialIconProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
      <div className="social-circle flex items-center justify-center transition-all duration-300 hover:scale-110">
        {icon}
      </div>
    </Link>
  )
}

export default Index

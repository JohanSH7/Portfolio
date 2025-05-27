import type React from "react"
import SocialIcon from "@/components/atoms/SocialIcon"

interface SocialIconGroupProps {
  title?: string
  icons: Array<{
    name: string
    href: string
    icon: React.ReactNode
    label: string
    color?: string
  }>
  direction?: "horizontal" | "vertical"
  className?: string
}

/**
 * SocialIconGroup molecule component
 * Groups and displays a set of social media icons (using SocialIcon atom).
 * Used in the RightSidebar organism and can be reused in the footer or other sections.
 * Receives an array of icon/link data and renders each as a SocialIcon.
 *
 * Props:
 *   title (string): Optional group title.
 *   icons (array): List of social icon/link objects.
 *   direction ("horizontal" | "vertical"): Layout direction (default: vertical).
 *   className (string): Additional CSS classes.
 */
const Index = ({ title, icons, direction = "vertical", className = "" }: SocialIconGroupProps) => {
  return (
    <div className={className}>
      {title && <h3 className="text-lg mb-4 rightbar-title">{title}</h3>}

      <div className={`flex ${direction === "vertical" ? "flex-col" : "flex-row"} gap-4`}>
        {icons.map((social) => (
          <SocialIcon
            key={social.name}
            href={social.href}
            icon={social.icon}
            label={social.label}
            className=""
          />
        ))}
      </div>
    </div>
  )
}

export default Index

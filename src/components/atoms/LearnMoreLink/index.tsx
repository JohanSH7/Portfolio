import Link from "next/link"
import React from "react"

interface LearnMoreLinkProps {
  href: string
  className?: string
}

/**
 * Reusable atom for "Learn More" links
 */
const Index = ({ href, className = "" }: LearnMoreLinkProps) => {
  return (
    <Link href={href} className={`text-primary font-medium hover:underline inline-flex items-center ${className}`}>
      Learn More <span className="ml-1">&rarr;</span>
    </Link>
  )
}

export default Index


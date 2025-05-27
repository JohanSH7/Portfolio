import React from 'react'
interface SectionTitleProps {
  title: string
  className?: string
  sidebar?: boolean
}

/**
 * Atom component for section titles
 */
const Index = ({ title, className = "", sidebar = false }: SectionTitleProps) => {
  return (
    <div className={`mb-6 ${sidebar ? "text-left" : "text-center"} ${className}`}>
      <h2 className="text-2xl font-bold text-[#2b2b2b]">{title}</h2>
      <div className={`w-20 h-1 bg-[#ffb400] mt-2 ${sidebar ? "" : "mx-auto"}`}></div>
    </div>
  )
}

export default Index

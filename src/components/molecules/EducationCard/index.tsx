import React from 'react'
interface EducationCardProps {
  institution: string
  degree: string
  period: string
  description: string
}

/**
 * Molecule component for education timeline cards
 */
const Index = ({ institution, degree, period, description }: EducationCardProps) => {
  return (
    <div className="flex flex-col md:flex-row mb-8 pb-8 border-b border-[#f0f0f6] last:border-b-0 last:mb-0 last:pb-0">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <h4 className="font-medium text-[#2b2b2b] mb-2">{institution}</h4>
        <div className="bg-[#ffb400] text-white text-xs py-1 px-3 rounded inline-block">
          <span>{period}</span>
        </div>
        <div className="mt-2 text-sm text-[#767676]">Student</div>
      </div>
      <div className="md:w-3/4">
        <h3 className="font-medium text-lg mb-2 text-[#2b2b2b]">{degree}</h3>
        <p className="text-sm text-[#767676]">{description}</p>
      </div>
    </div>
  )
}

export default Index
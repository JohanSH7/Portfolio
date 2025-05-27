import React from 'react'

interface DateBadgeProps {
  dateRange: string
  className?: string
}

/**
 * DataBadge atom component
 * Renders a small badge for displaying date ranges or tags.
 * Used for periods in education, experience, etc.
 *
 * Props:
 *   dateRange (string): The text to display in the badge.
 *   className (string): Additional CSS classes.
 */
const Index = ({ dateRange, className = "" }: DateBadgeProps) => {
  return (
    <div className={`bg-primary text-white text-xs font-medium rounded px-3 py-[2px] w-fit ${className}`}>
      {dateRange}
    </div>
  )
}

export default Index

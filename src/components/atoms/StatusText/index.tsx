import React from 'react'
interface StatusTextProps {
  text: string
  className?: string
}

/**
 * Reusable atom for status text
 */
const Index = ({ text, className = "" }: StatusTextProps) => {
  return <div className={`text-sm text-gray ${className}`}>{text}</div>
}

export default Index


import React from 'react'

interface ProgressBarProps {
  percentage: number
  height?: number
  showPercentage?: boolean
  animated?: boolean
  label?: string
  className?: string
}

/**
 * ProgressBar atom component
 * Renders a horizontal progress bar with optional label, percentage, and animation.
 * Used for skill levels, language proficiency, etc.
 *
 * Props:
 *   percentage (number): Progress value (0-100).
 *   height (number): Height of the bar (default: 8).
 *   showPercentage (boolean): Show percentage value (default: false).
 *   animated (boolean): Animate bar fill (default: true).
 *   label (string): Optional label for the bar.
 *   className (string): Additional CSS classes.
 */
const Index = ({ 
  percentage, 
  height = 8, // Default height
  showPercentage = false,
  animated = true,
  label,
  className = ""
}: ProgressBarProps) => {
  // Ensure percentage is between 0 and 100
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100)
  
  return (
    <div className={`w-full ${className}`}>
      {/* Label and percentage */}
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-1">
          {label && (
            <span className="paragraph-gray">{label}</span>
          )}
          {showPercentage && (
            <span className="paragraph-gray font-medium">
              {normalizedPercentage}%
            </span>
          )}
        </div>
      )}
      {/* Progress bar container with orange border */}
      <div 
        className="w-full rounded-full relative overflow-hidden"
        style={{ 
          height: `${height}px`,
          backgroundColor: 'transparent',
          border: '1px solid #ffb400',
          padding: '1px'
        }}
      >
        {/* Progress fill */}
        <div
          className="h-full rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
          style={{
            width: `${normalizedPercentage}%`,
            background: 'linear-gradient(90deg, #ffb400 0%, #ffc633 50%, #ffb400 100%)',
            height: '100%'
          }}
        >
          {/* Efecto de brillo animado más visible */}
          {animated && normalizedPercentage > 0 && (
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{
                animation: 'shine 2s ease-in-out infinite',
                width: '30%',
                transform: 'skewX(-20deg)'
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Index
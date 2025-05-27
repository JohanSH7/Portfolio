import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary"
}

/**
 * Button atom component
 * Renders a styled button with optional variants and effects.
 * Supports primary and secondary styles, hover/active effects, and custom classes.
 *
 * Props:
 *   children (ReactNode): Button content.
 *   onClick (function): Click handler.
 *   className (string): Additional CSS classes.
 *   variant ("primary" | "secondary"): Button style variant (default: primary).
 */
const Index = ({ children, onClick, className = "", variant = "primary" }: ButtonProps) => {
  const baseClasses = "rounded font-medium transition-all duration-300 flex items-center justify-center relative overflow-hidden group active:scale-95"

  const variantClasses = {
    primary: "btn-hire hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 hover:brightness-110",
    secondary: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-dark hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105",
  }

  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-1">
        {children}
      </span>
      {/* Shine effect on hover (primary variant) */}
      {variant === "primary" && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[300%] transition-transform duration-700"></div>
        </div>
      )}
      {/* Ripple effect on click */}
      <div className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-150">
        <div className="absolute inset-0 bg-white/10 rounded"></div>
      </div>
    </button>
  )
}

export default Index
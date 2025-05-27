interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

/**
 * SectionHeader atom component
 * Renders a stylish section header with a title, optional description, decorative underline, and background glow.
 * Used to visually separate major sections in the UI.
 *
 * Props:
 *   title (string): The section title.
 *   description (string): Optional section description.
 *   className (string): Additional CSS classes.
 */
const Index = ({ title, description, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`relative text-center mb-12 ${className}`}>
      {/* Glow background behind the title */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-32 h-12 bg-primary/20 blur-2xl rounded-full"></div>
      </div>

      <h2 className="section-h2 relative z-10">{title}</h2>

      {/* Decorative underline */}
      <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-2 mb-4 z-10 relative" />

      {description && (
        <p className="content-paragraph max-w-3xl mx-auto relative z-10">
          {description}
        </p>
      )}
    </div>
  )
}

export default Index

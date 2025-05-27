import Button from "@/components/atoms/Button"

interface HeroContentProps {
  onHireClick: () => void
  className?: string
}

/**
 * HeroContent molecule component
 * Displays the main textual content for the hero/profile section, including name, title, summary, and a call-to-action button.
 * Integrates the Button atom for the 'Hire Me' action, which triggers a dialog/modal in the parent component.
 * Used together with the HeroImage atom in the ProfileSection organism to form the complete hero area.
 *
 * Props:
 *   onHireClick (function): Handler for the 'Hire Me' button click.
 *   className (string): Additional CSS classes for layout.
 */
const Index = ({ onHireClick, className = "" }: HeroContentProps) => {
  return (
    <div className={`text-center lg:text-left ${className}`}>
      <h1 className="hero-title mb-1">
        I&#39;m Johan Henao
      </h1>
      <h2 className="hero-title mb-6">
        <span className="hero-accent">Systems</span> Engineer
      </h2>
      <div className="hero-paragraph mb-8">
        <p className="subtitle">
          Passionate technologist with expertise in data science, DevOps, and full-stack development. Specialized in building scalable solutions using Python, Machine Learning, and Blockchain, with hands-on experience in agile teams. Proven ability to analyze, clean, and model data for predictive insights, as well as design modular systems for real-world applications. Committed to innovation and continuous learning in emerging technologies.
        </p>
      </div>
      <div className="w-full lg:w-auto flex justify-center lg:justify-start mt-6">
        {/* Button atom triggers parent dialog/modal */}
        <Button onClick={onHireClick} className="btn-hire rounded-lg flex items-center justify-center">
          HIRE ME &rarr;
        </Button>
      </div>
    </div>
  )
}

export default Index
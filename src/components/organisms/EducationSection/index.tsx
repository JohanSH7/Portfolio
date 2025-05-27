import SectionHeader from "@/components/atoms/SectionHeader"
import EducationItem from "@/components/molecules/EducationItem"

/**
 * EducationSection organism component
 * Displays a list of education and training experiences.
 * Each item is rendered as a card with institution, degree, period, and description.
 *
 * Uses atomic design: composes atoms (SectionHeader) and molecules (EducationItem).
 */
const Index = () => {
  // List of education items (can be extended or loaded from data)
  const educationItems = [
    {
      institution: "Universidad de Antioquia",
      degree: "Systems Engineering (Current)",
      period: "Feb 2020 - Present",
      role: "Student",
      description:
        "Final stage of studies with a focus on software development, data science and analytics, and DevOps methodologies. He actively participates in projects such as Fábrica Escuela (modular development), website creation, and prediction models with DL.",
    },
    {
      institution: "IE Alfonso Upegui Orozco",
      degree: "High School Diploma (Honors)",
      period: "Feb 2010 - Nov 2018",
      role: "Student",
      description:
        "Graduated with academic honors, laying the foundation for technical and analytical skills.",
    },
    {
      institution: "Platzi",
      degree: "Programming Basics, Terminal/CLI, Prework Windows",
      period: "Jul 2021 (Multiple courses)",
      role: "Student",
      description:
        "Practical skills in programming logic, development environments, and command-line tools.",
    },
  ]

  return (
    <section className="mb-6">
      {/* Section header with title and description */}
      <SectionHeader
        title="Education"
        description="Formal education and specialized training in technology, systems engineering, and programming methodologies."
      />
      {/* List of education items */}
      <div className="max-w-5xl mx-auto bg-white px-6 py-6 rounded-lg shadow-sm">
        {educationItems.map((item, index) => (
          <EducationItem
            key={item.institution + item.degree}
            institution={item.institution}
            degree={item.degree}
            period={item.period}
            description={item.description}
            role={item.role}
            isLast={index === educationItems.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

export default Index

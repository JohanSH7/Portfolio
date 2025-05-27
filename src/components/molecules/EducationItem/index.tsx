import DateBadge from "@/components/atoms/DataBadge"

interface EducationItemProps {
  institution: string
  degree: string
  period: string
  description: string
  role?: string
  isLast?: boolean
} 

/**
 * EducationItem molecule component
 * Displays a single education or training entry as a two-column card.
 * Left column: institution, role, and period (with DateBadge).
 * Right column: degree and description.
 * Adds a divider unless it is the last item in the list.
 *
 * Props:
 *   institution (string): Name of the institution.
 *   degree (string): Degree or certification.
 *   period (string): Date range.
 *   description (string): Description of the experience.
 *   role (string): Role or position (default: Student).
 *   isLast (boolean): If true, omits the bottom divider.
 */
const Index = ({
  institution,
  degree,
  period,
  description,
  role = "Student",
  isLast = false
}: EducationItemProps) => {
  return (
    <>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-12 px-2 md:px-4">
          {/* Left column: institution, role, period */}
          <div className="md:col-span-4">
            <h4 className="section-h4 mb-2">{institution}</h4>
            <div className="flex items-center gap-2">
              <span className="paragraph-gray">{role}</span>
              <DateBadge dateRange={period} />
            </div>
          </div>
          {/* Right column: degree, description */}
          <div className="md:col-span-8">
            <h3 className="section-h4 mb-2">{degree}</h3>
            <p className="content-paragraph">{description}</p>
          </div>
        </div>
      </div>
      {/* Divider unless last item */}
      {!isLast && <div className="border-b border-background" />}
    </>
  )
}

export default Index

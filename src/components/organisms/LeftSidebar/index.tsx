import PersonalInfo from "@/components/molecules/PersonalInfo"
import ContactItem from "@/components/molecules/ContactItem"
import ProgressItem from "@/components/molecules/ProgressItem"
import ExtraSkillItem from "@/components/molecules/ExtraSkillItem"
import React from "react"
import { StackIcon } from "@/components/molecules/Icons"

/**
 * Organism component for the left sidebar.
 * Displays personal info, contact details, language and programming skills, and extra skills.
 * Uses atomic design: composes molecules (PersonalInfo, ContactItem, ProgressItem, ExtraSkillItem).
 * The sidebar is sticky and scrollable for accessibility.
 *
 * Props:
 *   isCompact (boolean): If true, renders a compact version for mobile/small screens.
 */
interface LeftSidebarProps {
  /**
   * If true, renders a compact sidebar (used for mobile layouts).
   */
  isCompact?: boolean;
}

const Index = ({ isCompact = false }: LeftSidebarProps) => {
  return (
    <div className={`${isCompact ? "px-4 py-4" : "h-screen sticky top-0 overflow-y-auto"} bg-white w-full`}>
      {/* Personal information section */}
      <div className="p-6 pb-10 mb-4">
        <PersonalInfo name="Johan Henao" title="Systems Engineer" imageSrc="/PersonalImage.jpg"/>
      </div>

      <div className="divider mx-auto m-2" />

      <div className="content-wrapper">
        {/* Contact details */}
        <div className="py-4">
          <ContactItem label="Age" value={23} />
          <ContactItem label="Residence" value="CO" />
          <ContactItem label="Freelance" value="Available" highlight={true} />
          <ContactItem label="Address" value="Medellín, Colombia" />
        </div>

        <div className="divider mx-auto m-2" />

        {/* Language proficiency */}
        <div className="py-4">
          <h3 className="leftbar-title font-medium mb-6">Languages</h3>
          <ProgressItem label="France" percentage={5} height={7} />
          <ProgressItem label="English" percentage={60} height={7} />
          <ProgressItem label="Spanish" percentage={100} height={7} />
        </div>

        <div className="divider mx-auto m-2" />

        {/* Programming languages proficiency */}
        <div className="py-4">
          <h3 className="leftbar-title font-medium mb-6">Programming Languages</h3>
          <ProgressItem label="Html" percentage={90} height={7}/>
          <ProgressItem label="CSS" percentage={80} height={7}/>
          <ProgressItem label="JavaScript" percentage={70} height={7}/>
          <ProgressItem label="Java" percentage={60} height={7}/>
          <ProgressItem label="Python" percentage={80} height={7}/>
          <ProgressItem label="SQL" percentage={60} height={7}/>
          <ProgressItem label="NoSQL" percentage={60} height={7}/>
          <ProgressItem label="TypeScript" percentage={70} height={7}/>
          <ProgressItem label="Shell" percentage={90} height={7}/>
        </div>

        <div className="divider mx-auto m-2" />

        {/* Extra skills section */}
        <div className="py-4">
          <h3 className="leftbar-title font-medium mb-4">Extra Skills</h3>
          <ExtraSkillItem skill="Machine Learning & Big Data" icon={StackIcon} />
          <ExtraSkillItem skill="Blockchain & Solidity" icon={StackIcon} />
          <ExtraSkillItem skill="Agile Methodologies" icon={StackIcon} />
          <ExtraSkillItem skill="Data Analysis & Cleaning" icon={StackIcon} />
          <ExtraSkillItem skill="Modular Development" icon={StackIcon} />
          <ExtraSkillItem skill="DevOps & CI/CD" icon={StackIcon} />
          <ExtraSkillItem skill="Advanced Python (ML/DL)" icon={StackIcon} />
          <ExtraSkillItem skill="Advanced GitHub" icon={StackIcon} />
        </div>
      </div>
    </div>
  )
}

export default Index
import Layout from "@/components/templates/Layout"
import ProfileSection from "@/components/organisms/ProfileSection"
import KnowledgeSection from "@/components/organisms/KnowledgeSection"
import EducationSection from "@/components/organisms/EducationSection"
import PortfolioSection from "@/components/organisms/PortfolioSection"
import Footer from "@/components/organisms/Footer"

/**
 * Home page component
 * This is the main entry point for the portfolio website.
 * It composes the layout using atomic design principles, rendering all major sections:
 * - ProfileSection: Personal introduction and summary
 * - KnowledgeSection: Technical skills and expertise
 * - EducationSection: Academic background and certifications
 * - PortfolioSection: Selected projects and achievements
 * - Footer: Contact and copyright
 *
 * The Layout component wraps all content and provides the overall page structure.
 */
export default function Home() {
  // Renders the main sections in order, following the design system
  return (
    <Layout>
      <ProfileSection />
      <KnowledgeSection />
      <EducationSection />
      <PortfolioSection />
      <Footer />
    </Layout>
  )
}

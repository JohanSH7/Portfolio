import { useState } from "react"
import SectionHeader from "@/components/atoms/SectionHeader"
import KnowledgeGrid from "@/components/molecules/Knowledge/KnowledgeGrid"
import Modal from "@/components/organisms/Modal"
import KnowledgeDialogContent from "@/components/molecules/Knowledge/KnowledgeDialogContent"

const cardTitles: Record<string, string> = {
  "data-science": "Data Science & AI",
  "devops-cloud": "DevOps & Cloud",
  "blockchain-dev": "Blockchain Development",
  "web-development": "Web Development", 
  "agile-collaboration": "Agile Collaboration",
  "technical-innovation": "Technical Innovation"
}

/**
 * KnowledgeSection organism component
 * Displays categorized technical knowledge and expertise as interactive cards.
 * Clicking a card opens a modal dialog with more details about the selected category.
 *
 * Uses atomic design: composes atoms (SectionHeader), molecules (KnowledgeGrid, KnowledgeDialogContent), and organisms (Modal).
 */
const Index = () => {
  // State for dialog visibility and selected card
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState<string>("")

  // Handler for card click: opens dialog with details
  const handleCardAction = (cardId: string) => {
    setSelectedCard(cardId)
    setIsDialogOpen(true)
  }

  // Handler to close the dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setSelectedCard("")
  }

  return (
    <section className="mb-8 py-8">
      {/* Section header with title and description */}
      <SectionHeader
        title="My Knowledge"
        description="Python and Data Science | DevOps and CI/CD | Blockchain Development | Agile Team Collaboration | Web Development"
      />
      {/* Grid of knowledge cards */}
      <KnowledgeGrid onCardAction={handleCardAction} />
      {/* Modal dialog for detailed knowledge info */}
      <Modal 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog}
        title={`${cardTitles[selectedCard] || selectedCard} Service`}
      >
        <KnowledgeDialogContent 
          cardId={selectedCard}
          onClose={handleCloseDialog}
        />
      </Modal>
    </section>
  )
}

export default Index

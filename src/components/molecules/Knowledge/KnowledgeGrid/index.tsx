import KnowledgeCard from "@/components/molecules/Knowledge/KnowledgeCard"
import { knowledgeData, type KnowledgeItem } from "@/components/molecules/Knowledge/KnowledgeData"

interface KnowledgeGridProps {
  onCardAction?: (cardId: string) => void
}

/**
 * KnowledgeGrid molecule component
 * Arranges multiple KnowledgeCard molecules in a responsive grid layout.
 * Used by the KnowledgeSection organism to display all knowledge areas.
 * Passes action handlers to KnowledgeCard for interactivity (e.g., opening dialogs).
 *
 * Props:
 *   onCardAction (function): Handler for card actions (e.g., open dialog in parent).
 */
const Index = ({ onCardAction }: KnowledgeGridProps) => {
  const handleCardClick = (cardId: string) => {
    console.log(`${cardId} card clicked`)
    onCardAction?.(cardId)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {knowledgeData.map((item: KnowledgeItem) => (
        <KnowledgeCard
          key={item.id}
          title={item.title}
          description={item.description}
          detailedDescription={item.detailedDescription}
          icon={item.icon}
          actionText={item.actionText}
          onAction={() => handleCardClick(item.id)}
        />
      ))}
    </div>
  )
}

export default Index
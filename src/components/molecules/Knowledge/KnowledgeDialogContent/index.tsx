import React from "react"

interface Props {
  cardId: string
  onClose: () => void
}

const cardTitles: Record<string, string> = {
  "data-science": "Data Science & AI",
  "devops-cloud": "DevOps & Cloud",
  "blockchain-dev": "Blockchain Development",
  "web-development": "Web Development",
  "agile-collaboration": "Agile Collaboration",
  "technical-innovation": "Technical Innovation"
}

const Index = ({ cardId, onClose }: Props) => {
  const title = cardTitles[cardId] || cardId

  return (
    <div className="text-center py-4">
      <div className="mb-6">
        <div className="social-circle mx-auto mb-4 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-dark">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h4 className="section-h4 mb-3">Coming Soon!</h4>
        <p className="content-paragraph mb-6">
          This service page is currently under development. 
          I&apos;m working hard to bring you detailed information about my {title.toLowerCase()} expertise.
        </p>
        <div className="bg-background rounded-lg p-4 mb-6">
          <p className="paragraph-black text-sm">
            <strong>What to expect:</strong><br/>
            • Detailed service descriptions<br/>
            • Portfolio examples<br/>
            • Pricing information<br/>
            • Contact forms
          </p>
        </div>
      </div>

      <div className="flex gap-3 justify-center">
        <button 
          onClick={onClose}
          className="px-6 py-2 bg-background paragraph-black rounded-lg hover:bg-gray-200 transition-colors duration-200"
        >
          Close
        </button>
        <button 
          onClick={() => {
            window.location.href = `mailto:your-email@example.com?subject=Interest in ${title}`
            onClose()
          }}
          className="btn-hire rounded-lg"
        >
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Index

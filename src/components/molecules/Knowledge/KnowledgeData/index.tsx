import React from "react"
import { 
  DataScienceIcon, 
  DevOpsIcon, 
  BlockchainIcon, 
  WebDevIcon, 
  AgileIcon, 
  InnovationIcon 
} from "@/components/molecules/Icons"

export interface KnowledgeItem {
  id: string
  title: string
  description: string
  detailedDescription: string
  icon: React.ReactNode
  actionText: string
}

export const knowledgeData: KnowledgeItem[] = [
  {
    id: "data-science",
    title: "Data Science & AI",
    description: "Advanced analytics, predictive models, and data-driven solutions.",
    detailedDescription: "Python (Pandas, Scikit-learn) | ML/DL Models | Data Cleaning | University projects with real-world datasets | TensorFlow & PyTorch",
    actionText: "ORDER NOW",
    icon: DataScienceIcon
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud",
    description: "Building scalable systems with CI/CD and automation",
    detailedDescription: "GitHub Actions | Docker | AWS/GCP | DevOps methodologies",
    actionText: "ORDER NOW",
    icon: DevOpsIcon
  },
  {
    id: "blockchain-dev",
    title: "Blockchain Dev",
    description: "Smart contracts and decentralized applications",
    detailedDescription: "Solidity | Web3 | ParGApp (Blockchain mobility) | GabbiIDAO (sustainable governance)",
    actionText: "ORDER NOW",
    icon: BlockchainIcon
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Modular and full-stack solutions",
    detailedDescription: "Python Backend | Fábrica Escuela Projects | Agile Prototyping | Hackathon-winning apps",
    actionText: "ORDER NOW",
    icon: WebDevIcon
  },
  {
    id: "agile-collaboration",
    title: "Agile Collaboration",
    description: "Teamwork that delivers results",
    detailedDescription: "Scrum/Kanban | Cross-functional teams | Technical Documentation",
    actionText: "ORDER NOW",
    icon: AgileIcon
  },
  {
    id: "technical-innovation",
    title: "Technical Innovation",
    description: "Emerging tech for real-world impact",
    detailedDescription: "Big Data | IoT Basics | Open-source contributions | Adaptability to new tools",
    actionText: "ORDER NOW",
    icon: InnovationIcon
  }
]
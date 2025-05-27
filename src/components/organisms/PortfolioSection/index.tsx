import React, { useState } from "react";
import SectionHeader from "@/components/atoms/SectionHeader";
import PortfolioCarousel from "@/components/molecules/Portfolio/PortfolioCarousel";
import PortfolioDialog from "@/components/molecules/Portfolio/PortfolioDialog";
import type { ProjectDetails } from "@/components/atoms/PortfolioDialogContent";

const projects: ProjectDetails[] = [
  {
    id: 1,
    title: "ParQapp - Blockchain Mobility Solution",
    description: "A blockchain-based mobility app awarded in an international hackathon, enabling transparent urban transport solutions.",
    fullDescription: "Developed during the ICP Hackathon, this project uses blockchain to decentralize mobility services. I contributed to the frontend modular architecture and smart contract integration, ensuring seamless user interactions with transport data.",
    imageSrc: "/ParQapp.png",
    technologies: ["React.js", "Axios", "ICP Blockchain", "Motoko", "Web3", "Tailwind CSS", "Next.js", "TypeScript"],
    link: "https://github.com/andresm05/icp-hackaton-crypto-blockers"
  },
  {
    id: 2,
    title: "GabbiiDAO - Sustainable Governance Platform",
    description: "A DAO platform for eco-project governance, presented at COPI to promote sustainability through decentralized voting",
    fullDescription: "Built with GovernCycle, this frontend allows stakeholders to vote on environmental initiatives. I implemented the UI for proposal tracking and token-based voting, aligning with DAO principles.",
    imageSrc: "/GabiiDAO.png",
    technologies: ["Next.js", "ICP Blockchain", "Motoko", "Web3", "Tailwind CSS", "TypeScript"],
    link: "https://hurh3-qqaaa-aaaal-qjr2a-cai.icp0.io/"
  },
  {
    id: 3,
    title: "Tomato Leaf Disease Detection (DL)",
    description: "Deep Learning model to identify tomato plant diseases with 94% accuracy, aiding agricultural productivity.",
    fullDescription: "This CNN-based model analyzes leaf images to classify diseases. I handled data augmentation, model training (TensorFlow/Keras), and performance optimization for real-world use.",
    imageSrc: "/TomatoLeaf.jpg",
    technologies: ["Python", "TensorFlow", "Matplotlib/Seaborn", "Google Colab", "Transfer Learning", "NumPy", "Pandas", "Keras", "Pillow", "ImageDataGenerator", "Sequential CNN"],
    link: "https://github.com/JohanSH7/Tomato-leaf-disease-detection_DeepLearning"
  },
  {
    id: 4,
    title: "Bank Marketing Analysis (ML)",
    description: "Predictive analytics system to optimize bank marketing campaigns using customer data.",
    fullDescription: "Leveraged Scikit-learn to analyze customer behavior and predict campaign success. Focused on feature engineering and model interpretability (SHAP values) for business insights.",
    imageSrc: "/BankMarketing.jpg",
    technologies: ["Google Colab", "Pandas", "NumPy", "Python", "Matplotlib/Seaborn", "Scikit-learn", "PyCaret", "One-Hot Encoding", "Random Forest", "Decision Trees", "Classification Report"],
    link: "https://github.com/JohanSH7/Proyecto_BankMarketing"
  },

];

/**
 * PortfolioSection organism component
 * Displays a list of selected projects in a horizontal carousel.
 * Each project can be clicked to open a dialog with more details.
 *
 * Uses atomic design: composes molecules (PortfolioCarousel, PortfolioDialog) and atoms (SectionHeader).
 * Projects are defined as an array of objects with metadata and links.
 */
const Index = () => {
  // State to track the currently selected project for the dialog
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  return (
    <section className="mb-4 py-8 bg-[#f0f0f6]">
      {/* Section header with title and description */}
      <SectionHeader
        title="Portfolio"
        description="Projects showcasing my expertise in blockchain, machine learning, and full-stack development."
      />
      {/* Carousel of project cards */}
      <PortfolioCarousel projects={projects} onSelectProject={setSelectedProject} />
      {/* Dialog for project details, shown when a project is selected */}
      <PortfolioDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Index;

import { useState } from "react";
import { FaUserCircle, FaShareAlt, FaTimes } from "react-icons/fa";
import Dialog from "@/components/molecules/Dialog";
import LeftSidebar from "@/components/organisms/LeftSidebar";
import SocialIcon from "@/components/atoms/SocialIcon";
import { socialLinks } from "@/components/molecules/SocialLinks";

const Index = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [expandedSocials, setExpandedSocials] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-center gap-3 lg:hidden">
      {/* Redes sociales expandidas */}
      {expandedSocials &&
        socialLinks.map((social) => (
          <SocialIcon
            key={social.name}
            href={social.href}
            icon={social.icon}
            label={social.label}
            className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
          />
        ))}

      {/* Botón de redes sociales */}
      <button
        onClick={() => setExpandedSocials((prev) => !prev)}
        className="w-12 h-12 bg-white border border-primary text-primary rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition"
        aria-label="Toggle Social Links"
      >
        {expandedSocials ? <FaTimes /> : <FaShareAlt />}
      </button>

      {/* Botón de info/personal */}
      <button
        onClick={() => setShowInfo(true)}
        className="w-12 h-12 bg-white border border-primary rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-all duration-300"
      >
        <FaUserCircle className="text-xl" />
      </button>

      {/* Diálogo con la izquierda */}
      <Dialog isOpen={showInfo} onClose={() => setShowInfo(false)} title="About Me">
        <LeftSidebar isCompact />
      </Dialog>
    </div>
  );
};

export default Index;
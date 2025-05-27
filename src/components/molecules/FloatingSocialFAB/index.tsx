import { useState } from "react";
import { FaShareAlt, FaTimes } from "react-icons/fa";
import SocialIcon from "@/components/atoms/SocialIcon";
import { socialLinks } from "@/components/molecules/SocialLinks";

const Index = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-center gap-2 lg:hidden">
      {/* Redes sociales (expandibles) */}
      {expanded &&
        socialLinks.map((social) => (
          <SocialIcon
            key={social.name}
            href={social.href}
            icon={social.icon}
            label={social.label}
            className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
          />
        ))}

      {/* Botón principal (abrir/cerrar) */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-12 h-12 bg-white border border-primary text-primary rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition"
        aria-label="Toggle Social Links"
      >
        {expanded ? <FaTimes /> : <FaShareAlt />}
      </button>
    </div>
  );
};

export default Index;

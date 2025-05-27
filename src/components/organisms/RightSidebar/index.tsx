import SocialIconGroup from "@/components/molecules/SocialIconGroup";
import { socialLinks } from "@/components/molecules/SocialLinks";

/**
 * RightSidebar organism component
 * Displays a vertical group of social media links using SocialIconGroup.
 * Responsive: compact on mobile, sticky and centered on desktop.
 * Uses atomic design: composes molecules (SocialIconGroup).
 *
 * Props:
 *   isCompact (boolean): If true, renders a compact version for mobile/small screens.
 */
const Index = ({ isCompact = false }: { isCompact?: boolean }) => {
  return (
    <div className={`flex flex-col items-center ${isCompact ? "py-4" : "h-screen sticky top-0 justify-center"} bg-white w-full`}>
      <SocialIconGroup
        title="Links"
        icons={socialLinks}
        direction="vertical"
        className="flex flex-col items-center"
      />
    </div>
  );
};

export default Index;

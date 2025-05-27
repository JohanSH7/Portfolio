import React from "react";

/**
 * Organism component for the footer with animated borders
 * Displays a footer with animated borders and copyright.
 * Uses atomic design: only atoms and simple layout.
 */
const Index = () => {
  return (
    <footer className="relative py-6 text-center bg-white overflow-hidden border-t border-[#eaeaea] text-[13px] sm:text-sm">
      {/* Top border animation */}
      <span className="animated-border top-0 left-0" />
      {/* Bottom border animation */}
      <span className="animated-border bottom-0 left-0" />
      {/* Left border animation */}
      <span className="animated-border-vertical left-0" />
      {/* Right border animation */}
      <span className="animated-border-vertical right-0" />

      <div className="max-w-screen-sm mx-auto px-4">
        <p className="mb-2 paragraph-black">
          Built with 💛 using React, Next.js & Tailwind CSS
        </p>
        <p className="text-[11px] sm:text-xs">
          © {new Date().getFullYear()} Johan Henao. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Index;
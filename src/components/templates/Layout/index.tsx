import type React from "react"
import LeftSidebar from "@/components/organisms/LeftSidebar"
import RightSidebar from "@/components/organisms/RightSidebar"
import FloatingSidebarButtons from "@/components/molecules/FloatingSidebarButtons"

interface LayoutProps {
  children: React.ReactNode
}

/**
 * Template component for the main layout
 */
const Index = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#f0f0f6] flex">
      {/* Left sidebar - 305px width as specified */}
      <div className="w-[var(--width-sidebar-left)] hidden lg:block">
        <LeftSidebar />
      </div>

      {/* Main content area with proper padding */}
      <main className="flex-1 overflow-y-auto px-8">{children}</main>
      <FloatingSidebarButtons />

      {/* Right sidebar - 95px width as specified */}
      <div className="w-[var(--width-sidebar-right)] hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  )
}

export default Index

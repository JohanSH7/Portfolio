import type React from "react"
import { useEffect, useRef } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

/**
 * Modal organism component
 * Displays a modal dialog overlay with a title and children content.
 * Handles closing on Escape key, outside click, and disables background scroll when open.
 * Uses atomic design: composes atoms and simple layout.
 *
 * Props:
 *   isOpen (boolean): Whether the modal is visible.
 *   onClose (function): Callback to close the modal.
 *   title (string): Optional title for the modal.
 *   children (ReactNode): Content to display inside the modal.
 */
const Index = ({ isOpen, onClose, title, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Handle Escape key to close modal
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    // Handle click outside modal to close
    const handleClickOutside = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-white/10">
      <div 
        ref={dialogRef}
        className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-200 transform transition-all duration-300 ease-out scale-100 opacity-100"
      >
        {title && (
          <div className="flex justify-between items-center p-6 border-b border-background">
            <h3 className="section-h4">{title}</h3>
            <button 
              onClick={onClose} 
              className="text-gray hover:text-dark transition-colors duration-200 text-2xl leading-none w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export default Index

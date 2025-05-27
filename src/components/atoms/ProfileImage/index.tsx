import Image from "next/image"
import React from "react"

interface ProfileImageProps {
  src: string
  alt: string
  className?: string
}

/**
 * ProfileImage atom component
 * Renders a circular profile image with optional custom classes.
 * Uses Next.js Image for optimization.
 *
 * Props:
 *   src (string): Image source path.
 *   alt (string): Alt text for the image.
 *   className (string): Additional CSS classes.
 */
const Index = ({ src, alt, className = "" }: ProfileImageProps) => {
  return (
    <div className={`rounded-full overflow-hidden ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={100}
        height={100}
        className="object-cover w-full h-full"
      />
    </div>
  )
}

export default Index

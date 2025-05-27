import Image from "next/image"

interface HeroImageProps {
  src: string
  alt: string
  className?: string
}

/**
 * HeroImage atom component
 * Renders a responsive profile/hero image for the hero section.
 * Used in the ProfileSection organism, paired with HeroContent molecule.
 * Adapts layout for mobile (centered) and desktop (side-aligned) views.
 *
 * Props:
 *   src (string): Image source path.
 *   alt (string): Alt text for the image.
 *   className (string): Additional CSS classes.
 */
const Index = ({ src, alt, className = "" }: HeroImageProps) => {
  return (
    <div className={`flex-shrink-0 ${className}`}>
      {/* Mobile: centered image */}
      <div className="lg:hidden relative w-60 h-80 mx-auto">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center rounded-lg shadow-lg"
        />
      </div>
      {/* Desktop: positioned image */}
      <div className="hidden lg:block relative w-80 h-96">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center rounded-tl-lg"
        />
      </div>
    </div>
  )
}

export default Index
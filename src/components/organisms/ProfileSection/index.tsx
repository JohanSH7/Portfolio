import { useState } from "react"
import Image from "next/image"
import Button from "@/components/atoms/Button"
import Dialog from "@/components/molecules/Dialog"
import HeroImage from "@/components/atoms/HeroImage"
import HeroContent from "@/components/molecules/HeroContent"

/**
 * ProfileSection organism component
 * Displays the main hero/profile section with personal image and summary content.
 * Responsive: shows image and content stacked on mobile, side-by-side on desktop.
 * Includes a 'Hire Me' button that opens a dialog for contact.
 * Uses atomic design: composes atoms (HeroImage, Button), molecules (HeroContent, Dialog).
 */
const Index = () => {
  // State for dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="bg-white shadow-sm mb-8 overflow-hidden relative">
      {/* Mobile layout: image above, content below */}
      <div className="relative w-full px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="lg:hidden flex flex-col items-center space-y-8">
          <HeroImage 
            src="/PersonalImage.jpg"
            alt="Johan Henao"
          />
          <HeroContent 
            onHireClick={() => setIsDialogOpen(true)}
            className="w-full text-center"
          />
        </div>
        {/* Desktop layout: content left, image fixed bottom-right */}
        <div className="hidden lg:block">
          <HeroContent 
            onHireClick={() => setIsDialogOpen(true)}
            className="w-full max-w-[55%] text-left"
          />
          <HeroImage 
            src="/PersonalImage.jpg"
            alt="Johan Henao"
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
      {/* Dialog for contact/hire me */}
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title="Contact Me">
        <div className="text-center">
          <Image
            src="/PersonalImage.jpg"
            alt="Johan Henao"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-6"
          />
          <h3 className="rightbar-title mb-2">Let&#39;s Work Together!</h3>
          <p className="paragraph-gray mb-6">
            I&#39;m available for freelance projects. Contact me to discuss your project needs.
          </p>
          <div className="bg-background p-4 rounded-lg mb-4">
            <p className="rightbar-title mb-1">Email:</p>
            <p className="paragraph-gray">jhoansebastianh2002@gmail.com</p>
          </div>
          <div className="bg-background p-4 rounded-lg mb-6">
            <p className="rightbar-title mb-1">Phone:</p>
            <p className="paragraph-gray">+57 3016574467</p>
          </div>
          <div className="w-full flex justify-center">
            <a href="https://wa.link/z9ifig" target="_blank" rel="noopener noreferrer">
              <Button className="btn-hire rounded-lg flex items-center justify-center">
                Send Message
              </Button>
            </a>
          </div>
        </div>
      </Dialog>
    </section>
  )
}

export default Index
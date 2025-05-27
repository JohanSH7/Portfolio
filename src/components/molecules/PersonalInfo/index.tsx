import Image from "next/image";
import React from "react";

interface PersonalInfoProps {
  name: string;
  title: string;
  imageSrc: string;
}

/**
 * PersonalInfo molecule component
 * Displays a profile image, name, and title for the sidebar or profile sections.
 * Uses Next.js Image for optimized loading and blur placeholder.
 *
 * Props:
 *   name (string): Person's name.
 *   title (string): Person's title or role.
 *   imageSrc (string): Path to the profile image.
 */
const Index = ({ name, title, imageSrc }: PersonalInfoProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Optimized image container (150x150) */}
      <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden mb-3 bg-background border-2 border-gray/10">
        <Image 
          src={imageSrc || "/placeholder.svg"} 
          alt={`${name} - ${title}`}
          width={150}
          height={150}
          className="object-cover w-full h-full"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyEkJyB5I5/PaqXT3M5xYXNjdCjgRQhHQp9Vfu6MuM9r0HKVx5PKc==" 
        />
      </div>

      {/* Text info */}
      <div className="space-y-1 pt-4" >
        <h4 className="leftbar-title">{name}</h4>
        <p className="paragraph-gray">{title}</p>
      </div>
    </div>
  );
};

export default Index;

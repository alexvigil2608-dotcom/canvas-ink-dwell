import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
}

const ProjectCarousel = ({
  images,
  alt,
  className,
  interval = 4000,
}: ProjectCarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {images.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt={`${alt} - ${index + 1}`}
          loading={index === 0 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out",
            index === current ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
    </div>
  );
};

export default ProjectCarousel;

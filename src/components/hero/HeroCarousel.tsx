"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { carouselSlides } from "@/lib/constants/carouselSlides";

const AUTOPLAY_DURATION = 7000;

/**
 * Modern minimal hero carousel with clean design
 */
export const HeroCarousel = () => {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([
        (currentIndex + newDirection + carouselSlides.length) %
        carouselSlides.length,
        newDirection,
      ]);
    },
    [currentIndex],
  );

  const goToSlide = (slideIndex: number) => {
    const newDirection = slideIndex > currentIndex ? 1 : -1;
    setPage([slideIndex, newDirection]);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(() => paginate(1), AUTOPLAY_DURATION);
      return () => clearTimeout(timer);
    }
  }, [isPaused, currentIndex, paginate]);

  const activeSlide = carouselSlides[currentIndex];

  return (
    <section
      className="relative w-full overflow-hidden bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[85vh] w-full">
        {/* Background Image with Overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              className="object-cover"
              priority={activeSlide.id === 1}
              quality={90}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 flex min-h-[85vh] items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Conference Badge */}
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
                    30th Annual Conference of ISN-NZ
                  </Badge>

                  {/* Subtitle */}
                  {activeSlide.subtitle && (
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                      {activeSlide.subtitle}
                    </p>
                  )}

                  {/* Title */}
                  <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                    {activeSlide.title}
                  </h1>

                  {/* Description */}
                  <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                    {activeSlide.description}
                  </p>

                  {/* Info Pills */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    {activeSlide.date && (
                      <div className="flex items-center gap-2 rounded-full border border-border/50 bg-card/80 px-4 py-2 text-sm backdrop-blur-sm">
                        <Calendar className="size-4 text-primary" />
                        <span className="font-medium">{activeSlide.date}</span>
                      </div>
                    )}
                    {activeSlide.venue && (
                      <div className="flex items-center gap-2 rounded-full border border-border/50 bg-card/80 px-4 py-2 text-sm backdrop-blur-sm">
                        <MapPin className="size-4 text-primary" />
                        <span className="font-medium">{activeSlide.venue}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button size="lg" className="group gap-2 rounded-full px-8 shadow-lg" asChild>
                      <Link href="/registration">
                        Register Now
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full px-8 backdrop-blur-sm hover:bg-primary hover:text-white"
                      asChild
                    >
                      <Link href="/conference-brochure">
                        View Brochure
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          <button
            onClick={() => paginate(-1)}
            className="flex size-10 items-center justify-center rounded-full border border-border/50 bg-card/80 backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex items-center gap-2 rounded-full border border-border/50 bg-card/80 px-4 py-2 backdrop-blur-sm">
            {carouselSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={cn(
                  "relative h-2 rounded-full transition-all duration-300",
                  currentIndex === i
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="flex size-10 items-center justify-center rounded-full border border-border/50 bg-card/80 backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Next slide"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isPaused && (
          <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-border/20">
            <motion.div
              key={currentIndex}
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: AUTOPLAY_DURATION / 1000,
                ease: "linear",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * A floating button that appears on scroll and returns the user to the top of the page.
 * It is performance-optimized and accessible.
 */
export const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame to prevent performance issues from frequent scroll events
      window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 400);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      aria-label="Go to top"
      title="Go to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg transition-all duration-300",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "active:scale-95",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0 pointer-events-none",
      )}
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
};

export default GoToTopButton;

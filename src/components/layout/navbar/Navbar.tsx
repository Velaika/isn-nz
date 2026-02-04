"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { mainNavItems } from "@/lib/constants/navigation";
import { ContactInfoBar } from "./NavbarContactInfoBar";
import { DesktopNavigation } from "./DesktopNavbar";
import { MobileNavigation } from "./MobileNavbar";
import AnnouncementBanner from "./NavbarCountdownTimer";
import { NavbarLogo } from "./NavbarLogo";

/**
 * The main navigation header for the site.
 * Features a "glassmorphism" effect that appears and intensifies on scroll.
 * It is composed of an announcement banner, contact info bar, and the primary navigation.
 */
export const NavbarComponent = (): React.JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      // Use requestAnimationFrame for optimal performance on scroll events.
      // This syncs the state update with the browser's repaint cycle.
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnnouncementBanner />
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300",
          // Style applied to browsers that support backdrop-filter (for the glass effect)
          "supports-[backdrop-filter]:bg-background/60",
          // When scrolled, the navbar becomes more opaque with a shadow and border.
          isScrolled
            ? "border-border/30 bg-background/80 shadow-lg"
            : // At the top, it's transparent to blend with the hero section.
              "border-transparent bg-transparent shadow-none",
        )}
      >
        <ContactInfoBar />
        <div className="flex items-center justify-between px-5">
          <NavbarLogo />
          <DesktopNavigation items={mainNavItems} />
          <MobileNavigation items={mainNavItems} />
        </div>
      </header>
    </>
  );
};

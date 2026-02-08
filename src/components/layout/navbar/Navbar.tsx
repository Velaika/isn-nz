"use client";

import { useEffect, useState } from "react";
import { MAIN_NAV_ITEMS } from "@/lib/constants/navigation-data";
import { cn } from "@/lib/utils";
import { DesktopNavigation } from "./DesktopNavbar";
import { MobileNavigation } from "./MobileNavbar";
import { ContactInfoBar } from "./NavbarContactInfoBar";
import AnnouncementBanner from "./NavbarCountdownTimer";
import { NavbarLogo } from "./NavbarLogo";

/**
 * Redesigned main navigation header with modern glassmorphism effect.
 * Features smooth transitions, better visual hierarchy, and enhanced scrolling behavior.
 */
export const NavbarComponent = (): React.JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
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
          "sticky top-0 z-50 w-full transition-all duration-300",
          "backdrop-blur-xl supports-[backdrop-filter]:bg-background/80",
          isScrolled
            ? "border-b border-border/40 bg-background/90 shadow-lg shadow-black/5"
            : "border-b border-transparent bg-transparent shadow-none",
        )}
      >
        <ContactInfoBar />
        <div
          className={cn(
            "flex items-center justify-between px-4 transition-all duration-300 lg:px-6",
            isScrolled ? "py-2 xl:py-2" : "py-2.5 xl:py-3",
          )}
        >
          <NavbarLogo isScrolled={isScrolled} />
          <DesktopNavigation items={MAIN_NAV_ITEMS} />
          <MobileNavigation items={MAIN_NAV_ITEMS} />
        </div>
      </header>
    </>
  );
};

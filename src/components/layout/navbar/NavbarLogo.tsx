"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Redesigned Navbar logo with clean, compact mobile layout
 */
export const NavbarLogo = ({ isScrolled }: { isScrolled?: boolean }) => {
  return (
    <Link href="/" className="group flex items-center gap-3">
      {/* Mobile: Compact horizontal layout */}
      <div className="flex items-center gap-2.5 xl:hidden">
        {/* Logos side by side */}
        <div className="flex items-center gap-1.5">
          <div
            className={cn(
              "relative overflow-hidden rounded-lg bg-background",
              isScrolled ? "size-9" : "size-10",
            )}
          >
            <Image
              src="/nz-isncon-logo.png"
              alt="NZ-ISNCON"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div
            className={cn(
              "relative overflow-hidden rounded-lg bg-background",
              isScrolled ? "size-9" : "size-10",
            )}
          >
            <Image
              src="/isn-logo.png"
              alt="ISN"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
        </div>

        {/* Title and badge */}
        <div className="flex items-center gap-1.5">
          <span
            className={cn("font-bold", isScrolled ? "text-base" : "text-lg")}
          >
            NZ-ISNCON
          </span>
          <span
            className={cn(
              "rounded-md bg-primary px-1.5 py-0.5 font-bold text-primary-foreground",
              isScrolled ? "text-[10px]" : "text-xs",
            )}
          >
            2026
          </span>
        </div>
      </div>

      {/* Desktop: Original layout */}
      <div className="hidden xl:flex items-center gap-4">
        {/* Logos container */}
        <div className="flex items-center gap-3">
          {/* NZ-ISNCON Logo */}
          <motion.div
            className="relative flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div
              className={cn(
                "relative overflow-hidden rounded-full ring-2 ring-primary/10 transition-all duration-300",
                "bg-gradient-to-br from-primary/5 via-background to-background",
                "group-hover:ring-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10",
                isScrolled ? "size-14" : "size-16",
              )}
            >
              <Image
                src="/nz-isncon-logo.png"
                alt="NZ-ISNCON Logo"
                fill
                sizes="64px"
                className="object-contain p-1.5"
                priority
              />
            </div>
          </motion.div>

          {/* ISN Logo */}
          <motion.div
            className="relative flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div
              className={cn(
                "relative overflow-hidden rounded-full ring-2 ring-primary/10 transition-all duration-300",
                "bg-gradient-to-br from-primary/5 via-background to-background",
                "group-hover:ring-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10",
                isScrolled ? "size-14" : "size-16",
              )}
            >
              <Image
                src="/isn-logo.png"
                alt="ISN Logo"
                fill
                sizes="64px"
                className="object-contain p-1.5"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className={cn(
            "h-10 w-px bg-gradient-to-b from-transparent via-border to-transparent transition-all duration-300",
            isScrolled ? "h-8" : "h-10",
          )}
        />

        {/* Text content */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <motion.span
              className={cn(
                "font-bold tracking-tight text-foreground transition-all duration-300",
                isScrolled ? "text-xl" : "text-2xl",
              )}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              NZ-ISNCON
            </motion.span>
            <motion.span
              className={cn(
                "rounded-md bg-gradient-to-r from-primary to-primary/90 px-2 py-0.5 font-bold text-primary-foreground shadow-sm transition-all duration-300",
                isScrolled ? "text-sm" : "text-base",
              )}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              2026
            </motion.span>
          </div>
          <p
            className={cn(
              "mt-0.5 text-muted-foreground font-medium transition-all duration-300",
              isScrolled ? "text-xs" : "text-sm",
            )}
          >
            30th Annual Conference • Dehradun
          </p>
        </div>

        {/* DNA Logo */}
        <div className="ml-2 flex items-center gap-3">
          <div
            className={cn(
              "h-10 w-px bg-gradient-to-b from-transparent via-border to-transparent transition-all duration-300",
              isScrolled ? "h-8" : "h-10",
            )}
          />
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-lg bg-primary/10 blur-md opacity-0 transition-opacity duration-300 hover:opacity-100" />
            <div
              className={cn(
                "relative overflow-hidden rounded-lg bg-background/50 p-1.5 ring-1 ring-border/50 transition-all duration-300",
                "hover:ring-primary/30 hover:shadow-md",
                isScrolled ? "size-9" : "size-10",
              )}
            >
              <Image
                src="/dna-logo.png"
                alt="DNA Logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Link>
  );
};

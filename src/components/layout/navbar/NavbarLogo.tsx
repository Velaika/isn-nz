"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Premium navbar logo with sleek styling
 */
export const NavbarLogo = () => {
  return (
    <Link href="/" className="group flex items-center gap-5">
      {/* Logo container with subtle glow */}
      <motion.div
        className="relative flex items-center justify-center"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Logo image */}
        <div className="relative size-16 overflow-hidden lg:size-20">
          <Image
            src="/nz-isncon-logo.png"
            alt="NZ-ISNCON Logo"
            fill
            sizes="80px"
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Text content */}
      <div className="flex flex-col">
        {/* Main title */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl font-bold tracking-tight text-foreground lg:text-2xl">
            NZ-ISNCON
          </span>
          <span className="rounded-md bg-primary px-2 py-0.5 text-sm font-bold text-primary-foreground lg:text-base">
            2026
          </span>
        </div>

        {/* Subtitle */}
        <p className="mt-0.5 text-xs text-muted-foreground lg:text-sm">
          30th Annual Conference • Dehradun
        </p>
      </div>

      
      <div className="ml-2 hidden h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

      <div className="hidden items-center gap-4 lg:flex">
                <div className="relative size-12 overflow-hidden opacity-70 transition-opacity hover:opacity-100">
          <Image
            src="/isn-logo.png"
            alt="ISN Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="relative size-12 overflow-hidden opacity-70 transition-opacity hover:opacity-100">
          <Image
            src="/dna-logo.png"
            alt="DNA Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </Link>
  );
};

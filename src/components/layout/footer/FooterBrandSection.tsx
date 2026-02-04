"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ConferenceDetails } from "@/lib/constants/contact";

const fadeUpVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { y: 20, opacity: 0 },
};

export const FooterBrandSection = () => (
  <motion.div variants={fadeUpVariant} className="space-y-6">
    {/* Logo and title */}
    <div className="flex items-center gap-4">
      <div className="relative size-16 overflow-hidden">
        <Image
          src={ConferenceDetails.logoSrc}
          alt={ConferenceDetails.logoAlt}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl font-bold text-foreground">NZ-ISNCON</span>
          <span className="rounded-md bg-primary px-2 py-0.5 text-sm font-bold text-primary-foreground">
            2026
          </span>
        </div>
        <p className="text-sm text-muted-foreground">Dehradun, India</p>
      </div>
    </div>

    {/* Event Description */}
    <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
      The 30th Annual Conference of Indian Society of Nephrology - North Zone.
      Bridging Science, Innovation, and Clinical Practice.
    </p>

    {/* Organized by */}
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Under the Aegis of
      </p>
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
          <span className="text-lg">🏥</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">ISN - North Zone</p>
          <p className="text-xs text-muted-foreground">& Dehradun Nephrology Association</p>
        </div>
      </div>
    </div>
  </motion.div>
);

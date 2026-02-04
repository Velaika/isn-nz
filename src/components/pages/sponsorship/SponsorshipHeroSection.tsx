"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
const VIDEO_PATH = "/videos/sponsorship-page.mp4";

/**
 * A visually engaging hero section for the Sponsorship page.
 */
export const SponsorshipHeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative w-full overflow-hidden py-24 text-center md:py-32"
    >
      {/* Video Background & Overlay */}
      <video
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={VIDEO_PATH} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50" />

      <div className="container relative z-10 mx-auto px-4 text-white">
        <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-300">
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <Home className="size-4" /> Home
          </Link>
          <ChevronRight className="size-4" />
          <span className="font-medium text-white">Sponsorship</span>
        </nav>

        <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl">
          Partnership <span className="text-primary">Opportunities</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Showcase your brand to a dedicated audience of nephrologists and
          healthcare leaders. Partner with NZ-ISNCON 2026 to gain valuable
          exposure and connect with key decision-makers.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/contact">Become a Sponsor</Link>
          </Button>
          {/* ✨ 2. Button styled for dark background */}
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/20 bg-transparent hover:bg-white/10"
          >
            <a href="#sponsorship-tiers" className="hover:text-white">
              View Tiers <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

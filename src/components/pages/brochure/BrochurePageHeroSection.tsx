"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  ChevronRight,
  Download,
  Home,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConferenceDetails } from "@/lib/constants/contact";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const VIDEO_PATH = "/videos/brochure-page.mp4";

/**
 * The main hero section for the conference brochure page, featuring a video background.
 */
export const BrochurePageHeroSection = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full overflow-hidden py-24 md:py-32"
    >
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
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center text-white">
        <motion.nav
          variants={itemVariants}
          className="mb-8 flex items-center justify-center gap-2 text-sm text-gray-300"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <Home className="size-4" /> Home
          </Link>
          <ChevronRight className="size-4" />
          <span className="font-medium text-white">Conference Brochure</span>
        </motion.nav>
        <motion.div
          variants={itemVariants}
          className="mb-6 flex flex-col items-center"
        >
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            Organized by the Indian Society of Nephrology - North Zone (ISN-NZ)
          </p>
          <div className="flex items-center justify-center gap-6">
            <Logo src="/isn-logo.png" alt="ISN logo" />
            <Logo src="/nz-isncon-logo.png" alt="NZ-ISN logo" />
            <Logo src="/dna-logo.png" alt="DNA logo" />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tighter md:text-6xl uppercase"
        >
          NZ-ISNCON 2026
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="mt-2 text-2xl font-semibold text-primary md:text-3xl"
        >
          Advancing Nephrology Through Innovation and Clinical Excellence
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-3xl text-lg text-gray-300"
        >
          A premier nephrology conference featuring comprehensive
          sessions on Clinical Nephrology, Dialysis Innovations,
          Kidney Transplantation, and Critical Care Nephrology
          with renowned national and international faculty.
        </motion.p>

        {/* ✨ 3. Updated event details and action buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 w-full max-w-lg rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-primary" />
              <span className="font-medium">
                {ConferenceDetails.eventDetails.dates}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              <span className="font-medium">
                {ConferenceDetails.address.line2 + ", " + ConferenceDetails.address.line3}
              </span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/registration">
                Register Now <ArrowUpRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black dark:text-white hover:bg-white/10"
              asChild
            >
              <Link
                href="/files/isn-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 size-5" /> Download Brochure
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Logo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative size-24 rounded-full border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-1">
    <Image src={src} alt={alt} fill className="object-contain" priority />
  </div>
);

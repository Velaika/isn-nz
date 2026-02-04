"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ChevronRight, Home, MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  BACKGROUND_VIDEO_PATH,
  ABSTRACT_SUBMISSION_FORM_LINK,
} from "@/lib/constants/abstractData";
import { ConferenceDetails } from "@/lib/constants/contact";

/**
 * Hero section for the Abstract Guidelines page with a video background.
 */
export const AbstractPageHeroSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative w-full overflow-hidden py-24 md:py-32"
  >
    {/* Video Background */}
    <video
      className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src={BACKGROUND_VIDEO_PATH} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay to ensure text readability */}
    <div className="absolute inset-0 bg-black/60" />

    <div className="container relative z-10 mx-auto px-4 text-center text-white">
      {/* Breadcrumbs */}
      <nav className="mb-4 flex items-center justify-center gap-2 text-sm text-gray-200">
        <Link
          href="/"
          className="flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          <Home className="size-4" />
          Home
        </Link>
        <ChevronRight className="size-4" />
        <span className="font-medium text-white">Abstract Guidelines</span>
      </nav>

      <h1 className="mb-4 text-4xl font-extrabold tracking-tighter md:text-6xl">
        Abstract Submission Guidelines
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-lg md:text-xl text-gray-300">
        We invite you to contribute to NZ-ISNCON 2026. Share your research with
        leading experts in nephrology, clinical kidney health, and
        transplantation medicine.
      </p>

      {/* Event Details */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
        <div className="flex items-center gap-2">
          <CalendarDays className="size-4 text-primary" />
          <span className="font-medium text-white">
            {ConferenceDetails.eventDetails.dates}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-primary" />
          <span className="font-medium text-white">
            {ConferenceDetails.address.line3}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          size="lg"
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link
            href={ABSTRACT_SUBMISSION_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send className="mr-2 size-5" />
            Submit Abstract via Form
          </Link>
        </Button>
        {/* <Button
          size="lg"
          variant="outline"
          asChild
          className="border-white text-black dark:text-white hover:bg-white/10"
        >
          <Link href={GUIDELINES_DOC_PATH}>
            <Download className="mr-2 size-5" />
            Download Guidelines
          </Link>
        </Button> */}
      </div>
    </div>
  </motion.section>
);

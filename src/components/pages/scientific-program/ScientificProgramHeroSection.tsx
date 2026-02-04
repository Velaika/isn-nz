"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Home, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConferenceDetails } from "@/lib/constants/contact";

const VIDEO_PATH = "/videos/program-page.mp4";

/**
 * Hero section for the Scientific Program page with video background.
 */
export const ScientificProgramHeroSection = () => (
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
      <source src={VIDEO_PATH} type="video/mp4" />
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
        <span className="font-medium text-white">Scientific Program</span>
      </nav>

      <h1 className="mb-4 text-4xl font-extrabold tracking-tighter md:text-6xl">
        Scientific Program
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">
        Explore our comprehensive three-day program featuring expert-led
        sessions, interactive slide seminars, and cutting-edge topics across
        multiple nephrology subspecialties.
      </p>

      {/* Event Details */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="size-4 text-primary" />
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
          <Link href="/registration">Register Now</Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="border-white text-white hover:bg-white/10"
        >
          <Link href="/abstract-guidelines">Submit Abstract</Link>
        </Button>
      </div>
    </div>
  </motion.section>
);

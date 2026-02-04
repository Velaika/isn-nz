"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGISTRATION_LINK } from "@/lib/constants/registrationData";

const VIDEO_PATH = "/videos/registeration-page.mp4";

/**
 * A visually engaging hero section for the Registration page, consistent with the site's style.
 */
export const RegisterationHeroSection = () => {
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
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10 mx-auto px-4 text-white">
        <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-300">
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <Home className="size-4" /> Home
          </Link>
          <ChevronRight className="size-4" />
          <span className="font-medium text-white">Registration</span>
        </nav>

        <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl">
          Register for <span className="text-primary">NZ-ISNCON 2026</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Secure your place at the premier nephrology conference of the year.
          Join us for an inspiring event filled with scientific learning,
          innovation, and networking.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mt-10 inline-block"
        >
          {/* The glow effect */}
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-2xl" />

          <div>
            <Button size="lg" asChild>
              <Link
                href={REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
                <ArrowUpRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

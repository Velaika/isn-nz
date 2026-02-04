"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Microscope, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Key features data with icons
 */
const features = [
  {
    label: "Case-Based Learning",
    icon: Microscope,
    description: "Interactive clinical discussions",
  },
  {
    label: "Expert Faculty",
    icon: Users,
    description: "Mix of experienced & early-career experts",
  },
  {
    label: "Knowledge Exchange",
    icon: MessageSquare,
    description: "Network with colleagues from North Zone",
  },
];

/**
 * Redesigned information bar with modern glassmorphic design
 */
export const InfoBar = () => (
  <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-primary/95">
    {/* Decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-white/5 blur-3xl" />
    </div>

    <div className="container relative z-10 mx-auto px-6 py-8 lg:px-12 lg:py-10">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
        {/* Branding */}
        <ConferenceBranding />

        {/* Features */}
        <KeyFeatures />

        {/* CTA */}
        <InfoBarCTA />
      </div>
    </div>
  </div>
);

/**
 * Conference branding section
 */
const ConferenceBranding = () => (
  <motion.div
    className="flex items-center gap-4"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* Animated line accent */}
    <div className="relative hidden sm:block">
      <div className="h-16 w-1 rounded-full bg-gradient-to-b from-white/40 via-white to-white/40" />
      <motion.div
        className="absolute top-0 left-0 right-0 h-4 rounded-full bg-white shadow-lg shadow-white/30"
        animate={{ y: [0, 48, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    <div>
      <motion.h3
        className="text-2xl font-bold text-white sm:text-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        NZ-ISNCON 2026
      </motion.h3>
      <motion.p
        className="text-sm text-white/80 sm:text-base"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Bridging Science, Innovation & Clinical Practice
      </motion.p>
    </div>
  </motion.div>
);

/**
 * Key features grid
 */
const KeyFeatures = () => (
  <motion.div
    className="hidden lg:block"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3

    }}
  >
    <div className="flex gap-6">
      {features.map((feature, index) => (
        <FeatureCard key={feature.label} feature={feature} index={index} />
      ))}
    </div>
  </motion.div>
);

/**
 * Individual feature card
 */
const FeatureCard = ({
  feature,
  index,
}: {
  feature: { label: string; icon: React.ComponentType<{ className?: string }>; description: string };
  index: number;
}) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.1 }}
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
    >
      <div className="flex size-10 items-center justify-center rounded-lg bg-white/10">
        <Icon className="size-5 text-white" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{feature.label}</p>
        <p className="text-xs text-white/60">{feature.description}</p>
      </div>
    </motion.div>
  );
};

/**
 * Call-to-action section
 */
const InfoBarCTA = () => (
  <motion.div
    className="flex items-center gap-6"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5 }}
  >
    <div className="hidden text-right sm:block">
      <p className="text-sm text-white/70">Registration</p>
      <p className="text-lg font-bold text-white">Open Now</p>
    </div>

    <Button
      asChild
      size="lg"
      className="group rounded-full border-2 border-white/20 bg-white px-8 text-primary shadow-lg shadow-black/10 transition-all duration-300 hover:bg-white hover:shadow-xl"
    >
      <Link href="/registration" className="flex items-center gap-2">
        Register
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  </motion.div>
);

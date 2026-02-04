"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { conferenceHighlightsData } from "@/lib/constants/conferenceHighlights";

// --- Type Definition ---
interface Highlight {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Main Section Component ---

/**
 * Conference highlights section with modern card grid
 */
export const ConferenceHighlightsSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8 }}
    className="relative w-full overflow-hidden py-20 md:py-28"
    aria-labelledby="highlights-heading"
  >
    <div className="container relative z-10 mx-auto max-w-6xl px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <HighlightsHeader />
        <HighlightsGrid />
      </motion.div>
    </div>
  </motion.section>
);

// --- Sub-components ---

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HighlightsHeader = () => (
  <motion.div variants={itemVariants} className="mb-12 text-center">
    <h2
      id="highlights-heading"
      className="font-serif text-4xl font-bold tracking-tight sm:text-5xl"
    >
      Conference Highlights
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
      Join us for a comprehensive program designed to advance nephrology practice
      and share the latest clinical insights.
    </p>
  </motion.div>
);

const HighlightsGrid = () => (
  <motion.div
    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  >
    {conferenceHighlightsData.map((highlight, index) => (
      <HighlightCard key={index} highlight={highlight} index={index} />
    ))}
  </motion.div>
);

const HighlightCard = ({
  highlight,
  index,
}: {
  highlight: Highlight;
  index: number;
}) => {
  const { title, description, icon } = highlight;

  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.5, delay: 0.05 * index }}
    >
      <Card className="group h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
        <CardHeader className="pb-3">
          <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
            <div className="text-primary [&>svg]:size-6">{icon}</div>
          </div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="leading-relaxed">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

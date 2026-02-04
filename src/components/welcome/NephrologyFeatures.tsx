"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { surgicalFeaturesData } from "@/lib/constants/surgicalFeatures";
import { SurgicalFeatureProps } from "@/lib/types";

// --- Main Section Component ---

/**
 * A refined section showcasing focus areas with a unified 'magnetic tilt' card grid.
 */
export const SurgicalFeatures = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8 }}
    className="relative w-full overflow-hidden py-20 md:py-28 bg-gradient-to-bl from-primary/10 via-transparent to-primary/5"
  >
    <div className="relative z-10 mx-auto px-4">
      <FeaturesHeader />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {surgicalFeaturesData.map((feature, index) => (
          <FeatureCard key={feature.index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  </motion.section>
);

// --- Sub-components ---

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/**
 * ✨ A cleaner header that puts the focus on the cards below.
 */
const FeaturesHeader = () => (
  <motion.div variants={itemVariants} className="mb-16 text-center">
    <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">
      Advancing Nephrology Care
    </h2>
    <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
      Our conference explores the latest advancements across these key domains,
      shaping the future of kidney health and patient outcomes.
    </p>
  </motion.div>
);

/**
 * ✨ A completely redesigned card with a single, elegant "magnetic tilt" interaction.
 */
const FeatureCard = ({
  feature,
  index,
}: {
  feature: SurgicalFeatureProps & { index: number };
  index: number;
}) => {
  const { icon: Icon, title, description } = feature;
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  // Create a spring-based motion value for smooth, dampened movement
  const smoothMouseX = useSpring(mouseX, { damping: 40, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 40, stiffness: 400 });

  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.8, delay: 0.1 * index }}
      style={{ perspective: "800px" }}
    >
      <Card
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(150);
          mouseY.set(150);
        }}
        className="relative h-full transform-style-3d rounded-2xl border bg-card/80 p-6 backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/10"
      >
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [smoothMouseX, smoothMouseY],
              ([x, y]) =>
                `radial-gradient(400px at ${x}px ${y}px, hsl(var(--primary) / 0.1), transparent 80%)`,
            ),
          }}
        />

        <CardHeader>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-7 w-7 text-primary" />
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { allBenefits } from "@/lib/constants/sponsorshipDetails";

// Animation variants for the content in the display card
const cardContentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

/**
 * Displays sponsorship benefits using an interactive tabbed layout.
 */
export const SponsorshipBenefitsSection = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(allBenefits[0]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-bl from-primary/10 via-transparent to-primary/5 py-20 md:py-28"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Benefits at a Glance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A detailed breakdown of what each sponsorship tier offers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column: Interactive Tabs */}
          <div className="space-y-2">
            {allBenefits.map((benefit) => (
              <button
                key={benefit.name}
                onClick={() => setSelectedBenefit(benefit)}
                className={cn(
                  "flex w-full items-center gap-4 rounded-lg p-4 text-left transition-colors duration-200",
                  "hover:bg-muted/50",
                  selectedBenefit.name === benefit.name
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground",
                )}
              >
                <benefit.icon className="size-6 flex-shrink-0" />
                <span className="font-semibold">{benefit.name}</span>
              </button>
            ))}
          </div>

          {/* Right Column: Animated Display Card */}
          <div className="lg:col-span-2">
            <Card className="flex min-h-[24rem] items-center justify-center overflow-hidden p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedBenefit.name}
                  variants={cardContentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-center"
                >
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl border bg-background/50">
                    <selectedBenefit.icon className="size-10 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">
                    {selectedBenefit.name}
                  </CardTitle>
                  <CardDescription className="mx-auto mt-4 max-w-md text-base">
                    {selectedBenefit.description}
                  </CardDescription>
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

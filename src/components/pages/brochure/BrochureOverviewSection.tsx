"use client";

import { motion } from "framer-motion";
import { overviewItems } from "@/lib/constants/brochureData";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

/**
 * A section providing a brief overview of the conference with a dynamic two-column layout.
 */
export const BrochureOverviewSection = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 md:py-28 bg-gradient-to-bl from-primary/10 via-transparent to-primary/5 flex items-center justify-center w-screen"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="mb-4 h-1.5 w-16 bg-primary rounded-full" />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              About The Conference
            </h2>
            <p className="mt-2 text-lg text-primary">
              Comprehensive Nephrology Education, Expert-Led Sessions, and
              Clinical Excellence
            </p>
            <p className="mt-6 text-muted-foreground">
              NZ-ISNCON 2026 is a premier nephrology conference
              bringing together leading experts from across the Indian Society
              of Nephrology - North Zone. This three-day event features
              comprehensive sessions on Clinical Nephrology, Dialysis
              Innovations, Kidney Transplantation, Critical Care Nephrology,
              and specialized pediatric and geriatric care.
            </p>
          </div>
          <div className="space-y-8">
            {overviewItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-background border p-3 rounded-full">
                      <Icon className="size-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

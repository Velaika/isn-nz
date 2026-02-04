"use client";

import { motion } from "framer-motion";
import { conferenceHighlights } from "@/lib/constants/registrationData";

/**
 * A section highlighting the key benefits of attending the conference.
 */
export const RegisterationHighlightsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="relative flex w-full items-center justify-center overflow-hidden py-20 md:py-28 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            An Unparalleled Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join us for an event designed to inspire, educate, and connect.
          </p>
        </motion.div>

        <div className="relative">
          <div className="space-y-12">
            {conferenceHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              const isLastItem = index === conferenceHighlights.length - 1;

              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Connection line */}
                  {!isLastItem && (
                    <div
                      className="absolute left-6 top-14 h-full w-px bg-gradient-to-b from-primary/60 via-primary/40 to-transparent"
                      aria-hidden="true"
                    />
                  )}

                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    />
                    <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-primary/30 bg-background/80 backdrop-blur-sm shadow-lg">
                      <Icon className="size-6 text-primary" />
                    </div>
                  </div>

                  <div className="w-full overflow-hidden rounded-xl border border-primary/10 bg-card/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-xl">
                    <h3 className="text-xl font-bold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {highlight.description}
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

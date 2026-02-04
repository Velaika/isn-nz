"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatRequirements } from "@/lib/constants/abstractData";

/**
 * A section detailing the formatting requirements for abstract submissions using an interactive accordion.
 */
export const AbstractFormatSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="w-full py-20 md:py-28 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
            Format Requirements
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ensure your submission adheres to the following formatting
            guidelines to be considered for review.
          </p>
        </div>

        {/* Requirements Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
          >
            {formatRequirements.map((req, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={req.element}
                className="border-b border-border/60"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {req.element}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {req.requirement}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6">
                  <div className="bg-background p-4 rounded-md border-l-4 border-primary ml-12">
                    <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                      <span className="text-primary font-semibold">
                        Example:{" "}
                      </span>
                      {req.example}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
};

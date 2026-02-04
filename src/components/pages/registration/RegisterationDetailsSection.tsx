"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { conferenceDetails } from "@/lib/constants/registrationData";

/**
 * A section displaying key details about the conference in a unified info bar.
 */
export const RegisterationDetailsSection = () => {
  // Get only the first three items to display
  const displayedDetails = conferenceDetails.slice(0, 3);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden py-20 md:py-28 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
    >
      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            Event at a Glance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            All the essential information you need to plan your participation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {displayedDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  const isLastItem = index === displayedDetails.length - 1;
                  const isLastInRowOnTablet = (index + 1) % 2 === 0;

                  return (
                    <motion.div
                      key={detail.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="relative p-8 text-center"
                    >
                      <div className="flex flex-col items-center">
                        <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
                          <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />
                          <Icon className="relative size-7 text-primary" />
                        </div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {detail.title}
                        </h3>
                        <p className="mt-2 text-xl font-bold text-foreground">
                          {detail.content}
                        </p>
                      </div>

                      {!isLastItem && (
                        <Separator
                          orientation="vertical"
                          className={`absolute right-0 top-1/2 hidden h-2/3 -translate-y-1/2 bg-primary/10 md:block ${
                            isLastInRowOnTablet ? "sm:hidden" : "sm:block"
                          }`}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="/conference-brochure" className="hover:text-white">
              View Full Conference Brochure
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

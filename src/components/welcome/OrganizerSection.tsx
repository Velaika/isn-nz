"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { organizersData } from "@/lib/constants/organizerDetails";
import { OrganizerProps } from "@/lib/types";

/**
 * Redesigned organizing committee section with balanced 2x2 grid
 */
export const OrganizerSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8 }}
    className="relative w-full overflow-hidden py-20 md:py-28"
  >
    <div className="container relative z-10 mx-auto max-w-5xl px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <OrganizerHeader />
        <OrganizerGrid />
        <OrganizerCTA />
      </motion.div>
    </div>
  </motion.section>
);

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OrganizerHeader = () => (
  <motion.div variants={itemVariants} className="mb-12 text-center">
    <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
      Organizing Committee
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
      Meet the distinguished faculty leading NZ-ISNCON 2026
    </p>
  </motion.div>
);

const OrganizerGrid = () => (
  <motion.div
    variants={itemVariants}
    className="mx-auto mb-12 grid max-w-4xl gap-6 sm:grid-cols-2"
  >
    {organizersData.map((organizer, index) => (
      <OrganizerCard key={index} organizer={organizer} index={index} />
    ))}
  </motion.div>
);

/**
 * Redesigned organizer card with centered layout
 */
const OrganizerCard = ({
  organizer,
  index,
}: {
  organizer: OrganizerProps;
  index: number;
}) => {
  const initials = organizer.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
        <CardContent className="flex items-center gap-4 p-6">
          <motion.div whileHover={{ scale: 1.05 }} className="relative shrink-0">
            <Avatar className="size-20 border-2 border-border shadow-md">
              <AvatarImage
                src={organizer.image}
                alt={organizer.name}
                className="object-cover"
              />
              <AvatarFallback className="bg-primary/10 text-lg font-bold text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -inset-1 rounded-full border border-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate font-semibold text-foreground">
              {organizer.name}
            </h3>
            <p className="text-sm font-medium text-primary">{organizer.role}</p>
            {organizer.institution && (
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                {organizer.institution}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const OrganizerCTA = () => (
  <motion.div variants={itemVariants} className="flex justify-center">
    <Button asChild variant="outline" size="lg" className="gap-2 hover:text-white">
      <Link href="/committee">
        View Full Committee
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  </motion.div>
);

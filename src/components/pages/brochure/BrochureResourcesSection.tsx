"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { resourceItems } from "@/lib/constants/brochureData";
import { ResourceItem } from "@/types/information";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * A section for important conference resources and links.
 */
export const BrochureResourcesSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="w-full py-20 md:py-28 bg-gradient-to-bl from-primary/10 via-transparent to-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Important Resources
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Quick access to all essential conference information and forms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourceItems.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

/**
 * ✨ A redesigned, fully-clickable resource card with an animated arrow on hover.
 */
const ResourceCard = ({ resource }: { resource: ResourceItem }) => {
  const Icon = resource.icon;
  return (
    <motion.div variants={cardVariants} className="h-full">
      <Link
        href={resource.href}
        target={resource.isExternal ? "_blank" : undefined}
        className="h-full w-full"
      >
        <Card className="group relative h-full bg-card p-6 transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1.5">
          {/* Animated Arrow Icon */}
          <ArrowUpRight className="absolute right-4 top-4 size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />

          {/* Content */}
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-background">
                <Icon className="size-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                {resource.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {resource.description}
              </p>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

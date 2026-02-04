"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

/**
 * The final, visually striking Call-To-Action section for the brochure page.
 */
export const BrochureCtaSection = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full py-24 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
    >
      <div className="container mx-auto px-4">
        {/* ✨ 1. The main CTA container with a glowing gradient border effect */}
        <div className="relative mx-auto max-w-4xl rounded-2xl bg-gradient-to-b from-primary/50 to-primary p-1 shadow-2xl shadow-primary/20">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-background p-8 text-center md:p-12">
            {/* ✨ 2. A prominent icon to anchor the design */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
              <MapPin className="size-8 text-primary" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Join Us
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              We look forward to welcoming you to this premier Nephrology
              conference and sharing a landmark academic experience.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/registration">
                  Register Today
                  <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/committee">
                  <Users className="mr-2 size-5" />
                  View Organizing Committee
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * A final Call-To-Action section for the Committee page.
 */
export const CommitteeCtaSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="w-full py-24 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Engage with the Experts
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Be part of an exceptional conference and connect with our
            distinguished committee members and faculty.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/registration">
                Register Now
                <ArrowUpRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact" className="hover:text-white">
                <Phone className="mr-2 size-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

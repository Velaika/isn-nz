"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Handshake, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * A final, visually engaging Call-To-Action section for the Sponsorship page.
 */
export const SponsorshipCtaSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden bg-background py-24 md:py-32"
    >
      {/* ✨ 1. Rich gradient background and decorative elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <Handshake className="absolute -left-16 top-1/2 -z-10 size-96 -translate-y-1/2 -rotate-12 text-primary/5" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
            <Handshake className="size-8 text-primary" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Ready to Partner with Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Contact our team to discuss sponsorship packages and secure your
            partnership for NZ-ISNCON 2026. We look forward to collaborating
            with you.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                <Mail className="mr-2 size-5" />
                Contact Us for Sponsorship
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * A final, visually rich Call-To-Action section for the Contact page.
 */
export const ContactCtaSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="w-full py-24 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
    >
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/images/dehradun-view.png"
            alt="Venue Hyatt Centric Dehradun"
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />

          <div className="relative z-10 flex flex-col items-center p-12 text-center text-white md:p-16">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Ready to Register?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
              Secure your spot at NZ-ISNCON 2026 today. Join leading
              professionals for an unforgettable conference experience.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/registration">
                  Proceed to Registration
                  <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

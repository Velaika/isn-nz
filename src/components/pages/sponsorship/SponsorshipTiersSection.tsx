"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sponsorshipTiers } from "@/lib/constants/sponsorshipDetails";

/**
 * Displays the different sponsorship tiers with a visually distinct featured tier.
 */
export const SponsorshipTiersSection = () => {
  return (
    <motion.section
      id="sponsorship-tiers"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-20 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 py-20 md:py-28"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Sponsorship Packages
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the partnership level that best aligns with your marketing
            goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
          {sponsorshipTiers.map((tier) => (
            // ✨ 1. Wrapper for glow effect on the featured card
            <div
              key={tier.name}
              className={cn(
                "relative rounded-2xl transition-transform duration-300",
                tier.featured && "lg:-translate-y-6",
              )}
            >
              {/* Animated gradient for the glow */}
              <div
                className={cn(
                  "absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/60 via-primary to-amber-400 opacity-0 transition-opacity duration-300",
                  tier.featured && "opacity-100",
                )}
              />
              <Card
                className={cn(
                  "relative flex h-full flex-col bg-card/80 backdrop-blur-md", // ✨ 2. Glassmorphic effect for all cards
                  tier.featured && "bg-background",
                )}
              >
                {tier.featured && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Star className="mr-1.5 size-3" /> Most Popular
                  </Badge>
                )}
                <CardHeader
                  className={cn(
                    "text-center",
                    tier.featured && "bg-primary/5", // Highlighted header
                  )}
                >
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="pt-4 text-4xl font-bold text-primary">
                    {tier.price}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {tier.benefits.map((benefit, index) => (
                      <li
                        key={benefit}
                        // ✨ 3. Cleaner benefit list with borders
                        className={cn(
                          "flex items-start border-b border-border/50 pb-4",
                          index === tier.benefits.length - 1 && "border-b-0",
                        )}
                      >
                        <Check className="mr-2.5 mt-1 size-4 flex-shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full hover:text-white"
                    size="lg"
                    variant={tier.featured ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">Select Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

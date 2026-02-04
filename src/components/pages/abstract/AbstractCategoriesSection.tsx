"use client";

import { motion } from "framer-motion";
import { submissionCategories } from "@/lib/constants/abstractData";
import CardSwap, { Card } from "@/components/ui/card-swap/CardSwap";

/**
 * A responsive section displaying submission categories with an animated card swapping effect.
 */
export const AbstractCategoriesSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="relative w-full overflow-x-hidden bg-background py-20 md:py-56"
  >
    <div className="absolute inset-0 z-0 bg-gradient-to-bl from-primary/10 via-transparent to-primary/5" />

    <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-8 px-4 md:gap-16 lg:grid-cols-2">
      <div className="max-w-xl text-center lg:text-left">
        <h2 className="text-3xl font-extrabold tracking-tighter text-primary sm:text-4xl">
          Submission Categories
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Our conference covers a diverse range of topics in Nephrology. Select
          the category that best fits your research to ensure it reaches the
          right audience.
        </p>
        <p className="mt-4 text-sm text-muted-foreground/80 sm:text-base">
          The cards on the right will cycle through the available categories
          automatically. You can also hover over them to pause the animation.
        </p>
      </div>

      <div className="relative mx-auto h-[340px] w-full max-w-xs sm:h-[400px] sm:max-w-sm lg:mx-0 lg:max-w-lg lg:justify-self-end -translate-x-20 lg:-translate-x-8">
        <CardSwap delay={4000} pauseOnHover={true}>
          {submissionCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title}>
                {/* ✨ 1. Main card container with group for hover states */}
                <div className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-card/80 p-6 text-center shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out hover:shadow-primary/20 md:p-8">
                  {/* ✨ 2. Animated glow effect on hover */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-transparent to-card opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Card Content (positioned above the glow) */}
                  <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                    <div className="mb-4 rounded-lg bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20 md:p-4">
                      <Icon className="size-7 text-primary md:size-8" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground md:text-2xl">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground md:text-base">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </CardSwap>
      </div>
    </div>
  </motion.section>
);

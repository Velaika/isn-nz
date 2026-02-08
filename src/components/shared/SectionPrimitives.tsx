"use client";

import { motion } from "framer-motion";
import type React from "react";
import { sectionVariants, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

/**
 * Standardized section container with consistent spacing and animations.
 */
interface SectionContainerPropsType {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "subtle" | "gradient" | "none";
}

export const SectionContainer = ({
  children,
  className,
  id,
  background = "default",
}: SectionContainerPropsType) => {
  const backgroundStyles = {
    default: "",
    subtle: "bg-muted/30",
    gradient: "bg-gradient-to-b from-primary/5 via-transparent to-transparent",
    none: "",
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className={cn(
        "relative w-full overflow-hidden py-16 md:py-24",
        backgroundStyles[background],
        className,
      )}
      id={id}
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {children}
      </div>
    </motion.section>
  );
};

/**
 * Standardized section header with consistent typography.
 */
interface SectionHeaderPropsType {
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  title,
  description,
  id,
  align = "center",
  className,
}: SectionHeaderPropsType) => {
  return (
    <motion.div
      variants={sectionVariants}
      className={cn("mb-12", align === "center" && "text-center", className)}
    >
      <h2
        id={id}
        className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base text-muted-foreground md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

/**
 * Standardized card wrapper with consistent styling.
 */
interface StandardCardPropsType {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const StandardCard = ({
  children,
  className,
  hover = true,
}: StandardCardPropsType) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300",
        hover &&
          "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        className,
      )}
    >
      {children}
    </div>
  );
};

/**
 * Standardized icon container.
 */
interface IconContainerPropsType {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const IconContainer = ({
  children,
  size = "md",
  className,
}: IconContainerPropsType) => {
  const sizes = {
    sm: "size-10 rounded-lg",
    md: "size-12 rounded-xl",
    lg: "size-14 rounded-2xl",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-primary/10 text-primary",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
};

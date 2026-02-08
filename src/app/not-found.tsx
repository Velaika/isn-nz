"use client";

import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

/**
 * Animation variants for consistent motion design
 */
const animations = {
  fadeUp: {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 30, opacity: 0 },
  },
  staggered: {
    visible: { transition: { staggerChildren: 0.12 } },
    hidden: { transition: { staggerChildren: 0.05 } },
  },
  scale: {
    visible: { scale: 1, opacity: 1 },
    hidden: { scale: 0.95, opacity: 0 },
  },
};

/**
 * Quick navigation links configuration
 */
const quickLinks = [
  { name: "Registration", href: "/registration" },
  { name: "Abstract Guidelines", href: "/abstract-guidelines" },
  { name: "Committee", href: "/committee" },
];

/**
 * 404 Page with animated illustration and helpful navigation
 */
export default function NotFound() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative min-h-screen overflow-hidden bg-background"
      >
        <BackgroundElements />

        <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6 md:px-16 lg:px-24">
          <motion.div
            variants={animations.staggered}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-7xl"
          >
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <IllustrationSection />
              <ContentSection />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}

/**
 * Animated background with floating elements
 */
function BackgroundElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute right-[8%] top-1/4 h-64 w-64 rounded-full border border-border/20 opacity-30"
      />
      <motion.div
        animate={{ rotate: [360, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-[8%] h-48 w-48 rounded-full border border-border/30 opacity-20"
      />
      <div className="absolute right-[5%] top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-[120px] opacity-50" />
      <div className="absolute bottom-1/3 left-[5%] h-64 w-64 rounded-full bg-muted/20 blur-[100px] opacity-40" />
    </div>
  );
}

/**
 * Animated 404 illustration with TV graphic
 */
function IllustrationSection() {
  return (
    <motion.div
      variants={animations.fadeUp}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex justify-center lg:justify-start"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -8 }}
        transition={{ duration: 0.3 }}
        className="group relative"
      >
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <motion.div
            variants={animations.scale}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <Image
              src="/Error-TV.svg"
              alt="404 Error TV"
              width={400}
              height={400}
              priority
              className="h-auto w-[280px] drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 md:w-[350px] lg:w-[400px]"
            />
            {/* ✨ Dynamic Screen Flicker Effect */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-20 rounded-lg bg-white/5"
              animate={{ opacity: [0, 0.05, 0, 0.1, 0, 0.03] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-black text-primary/20 md:text-8xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.div>
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </div>
        {/* ✨ Pulsing Background Glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

/**
 * Main content with title, description, and navigation
 */
function ContentSection() {
  return (
    <motion.div
      variants={animations.staggered}
      className="text-center lg:text-left"
    >
      <Card className="bg-card/50 backdrop-blur-lg">
        <CardContent className="space-y-8 p-8 md:p-10">
          <ErrorBadge />
          <MainTitle />
          <Description />
          <ActionButtons />
        </CardContent>
        <CardFooter className="p-8 md:p-10 pt-0">
          <QuickNavigation />
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function ErrorBadge() {
  return (
    <motion.div
      variants={animations.scale}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-3 rounded-full border border-border/50 bg-card/50 px-4 py-2 shadow-md"
    >
      <motion.div
        className="h-2.5 w-2.5 rounded-full bg-amber-500 shadow-lg"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="text-sm font-semibold uppercase tracking-wide text-amber-500">
        404 Error
      </span>
    </motion.div>
  );
}

function MainTitle() {
  return (
    <motion.h1
      variants={animations.fadeUp}
      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="text-4xl font-black leading-[0.9] tracking-tighter text-foreground sm:text-5xl md:text-6xl"
    >
      Page Not <span className="text-primary">Found</span>
    </motion.h1>
  );
}

function Description() {
  return (
    <motion.p
      variants={animations.fadeUp}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-2xl font-medium leading-relaxed text-muted-foreground lg:mx-0 md:text-lg"
    >
      The page you&apos;re looking for doesn&apos;t exist or has been moved.
      Let&apos;s get you back on track.
    </motion.p>
  );
}

function ActionButtons() {
  return (
    <motion.div
      variants={animations.fadeUp}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button asChild size="lg" className="w-full font-semibold sm:w-auto">
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            <span>Return Home</span>
          </Link>
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full font-semibold sm:w-auto"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-white"
          >
            <Search className="h-5 w-5" />
            <span>Contact Support</span>
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}

function QuickNavigation() {
  return (
    <motion.div
      variants={animations.fadeUp}
      transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full border-t border-border/30 pt-6"
    >
      <p className="mb-4 text-center text-sm text-muted-foreground lg:text-left">
        Or, try one of these pages:
      </p>
      {/* ✨ Upgraded Quick Links */}
      <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
        {quickLinks.map((link) => (
          <motion.div
            key={link.name}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={link.href}
              className="inline-block rounded-full border border-border/50 bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

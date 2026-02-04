"use client";

import { motion } from "framer-motion";
import { FileText, Bell, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

/**
 * Abstract Guidelines page - Coming Soon
 */
export default function AbstractGuidelinesPage() {
  return (
    <Layout>
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20">
        {/* <AbstractPageHeroSection />
        <AbstractCategoriesSection />
        <AbstractFormatSection />
        <AbstractGuidelinesSection />
        <AbstractCtaSection /> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 flex size-24 items-center justify-center rounded-full bg-primary/10"
          >
            <FileText className="size-12 text-primary" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground"
          >
            <Bell className="size-4" />
            Coming Soon
          </motion.div>

          {/* Title */}
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Abstract Submission Guidelines
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            We are currently finalizing the abstract submission guidelines for NZ-ISNCON 2026.
            Please check back soon for detailed instructions on how to submit your research work.
          </p>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-10 grid max-w-2xl gap-4 sm:grid-cols-2"
          >
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-left backdrop-blur-sm">
              <h3 className="mb-2 font-semibold text-foreground">Submission Portal</h3>
              <p className="text-sm text-muted-foreground">
                The online abstract submission portal will be available shortly.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-left backdrop-blur-sm">
              <h3 className="mb-2 font-semibold text-foreground">Categories</h3>
              <p className="text-sm text-muted-foreground">
                Abstract categories and topics will be announced soon.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button asChild size="lg" className="gap-2">
              <Link href="/registration">
                Register Now
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ABSTRACT_SUBMISSION_FORM_LINK } from "@/lib/constants/abstractData";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/**
 * A final, visually engaging Call-To-Action section prompting users to submit their abstract.
 */
export const AbstractCtaSection = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      // ✨ Improvement 1: Dynamic gradient background for a premium feel
      className="relative w-full overflow-hidden py-24 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
    >
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <div className="mb-4 flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-4 text-primary" />
            Call for Papers
          </div>
          <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl text-primary">
            Ready to Contribute?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Submit your abstract through our Form and then register for the
            conference. We look forward to receiving your academic
            contributions!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a
                href={ABSTRACT_SUBMISSION_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="mr-2 size-5" />
                Submit Abstract via Form
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/registration" className="hover:text-white">
                Register for Conference
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

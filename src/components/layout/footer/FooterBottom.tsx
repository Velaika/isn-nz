"use client";

import { motion } from "framer-motion";

export const FooterBottom = ({ currentYear }: { currentYear: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-center"
  >
    <p className="text-sm text-muted-foreground">
      © JOY EVENTS {currentYear}. All rights reserved.
    </p>
    {/* ✨ Updated credit line with link */}
    {/* <p className="text-xs text-muted-foreground">
            Designed & Developed by{" "}
            <Link
                href="https://velaika.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground transition-colors hover:text-primary"
            >
                Velaika Studios
            </Link>
        </p> */}
  </motion.div>
);

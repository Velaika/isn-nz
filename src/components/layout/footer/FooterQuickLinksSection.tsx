// components/layout/FooterQuickLinksSection.tsx

import { motion } from "framer-motion";
import { FooterSectionHeader, FooterLink } from "./FooterShared";
import { LinkIcon } from "lucide-react";

const links = [
  { name: "Registration", href: "/registration" },
  { name: "Scientific Program", href: "/scientific-program" },
  { name: "Sponsorship", href: "/sponsorship" },
  { name: "Committee", href: "/committee" },
  { name: "Contact", href: "/contact" },
];

const fadeUpVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hidden: { y: 20, opacity: 0 },
};

export const FooterQuickLinksSection = () => (
  <motion.div variants={fadeUpVariant} className="space-y-5">
    <FooterSectionHeader icon={LinkIcon} title="Quick Links" />
    <nav className="flex flex-col space-y-4">
      {links.map((link) => (
        <FooterLink key={link.href} {...link} />
      ))}
    </nav>
  </motion.div>
);

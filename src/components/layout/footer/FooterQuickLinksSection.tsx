import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";
import { FooterLink, FooterSectionHeader } from "./FooterShared";

const links = [
  { name: "Registration", href: "/registration" },
  { name: "Scientific Program", href: "/scientific-program" },
  { name: "Sponsorship", href: "/sponsorship" },
  { name: "Committee", href: "/committee" },
  { name: "Contact", href: "/contact" },
];

const fadeUpVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
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

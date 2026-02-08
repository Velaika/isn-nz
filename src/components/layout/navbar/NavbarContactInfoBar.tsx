"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CONFERENCE_DETAILS } from "@/lib/constants/contact-data";
import type { ContactInfoLinkPropsType } from "@/types/ui";

const contactLinks: ContactInfoLinkPropsType[] = [
  {
    icon: Phone,
    href: CONFERENCE_DETAILS.contact.phoneHref,
    text: CONFERENCE_DETAILS.contact.phone,
  },
  {
    icon: Mail,
    href: CONFERENCE_DETAILS.contact.emailHref,
    text: CONFERENCE_DETAILS.contact.email,
  },
];

/**
 * Redesigned contact info bar with modern styling and improved visual hierarchy
 */
export const ContactInfoBar = () => {
  return (
    <div className="hidden lg:block bg-gradient-to-r from-primary/5 via-primary/3 to-primary/5 border-b border-border/40">
      <div className="flex items-center justify-between py-2.5 px-8">
        <div className="flex items-center gap-6">
          {/* Contact links with modern pill design */}
          {contactLinks.map((item) => (
            <InfoLink key={item.href} {...item} />
          ))}

          {/* Location info with enhanced styling */}
          <div className="flex items-center gap-2.5 rounded-full bg-background/50 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm ring-1 ring-border/30 transition-all duration-200 hover:ring-primary/30">
            <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 transition-colors">
              <MapPin className="size-3.5 text-primary" />
            </div>
            <span className="font-semibold">
              {CONFERENCE_DETAILS.address.line1},{" "}
              {CONFERENCE_DETAILS.address.line2}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Enhanced date badge with gradient */}
          <motion.div
            className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-1.5 text-xs font-bold text-foreground ring-1 ring-primary/20 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-base">📅</span>
            <span>10-12 April 2026</span>
          </motion.div>

          {/* Theme toggle */}
          <div className="rounded-full bg-background/50 p-1 ring-1 ring-border/30 backdrop-blur-sm">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Modern styled link with icon and hover effects
 */
const InfoLink = ({ icon: Icon, href, text }: ContactInfoLinkPropsType) => {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2.5 rounded-full bg-background/50 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm ring-1 ring-border/30 transition-all duration-200 hover:bg-background hover:text-foreground hover:ring-primary/30 hover:shadow-sm"
    >
      <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-110">
        <Icon className="size-3.5 text-primary" />
      </div>
      <span className="font-semibold">{text}</span>
    </Link>
  );
};

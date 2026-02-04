"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { ConferenceDetails, OrganizerContactData } from "@/lib/constants/contact";

const fadeUpVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { y: 20, opacity: 0 },
};

const staggeredVariants = {
  visible: { transition: { staggerChildren: 0.1 } },
  hidden: {},
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Registration", href: "/registration" },
  { label: "Scientific Programme", href: "/scientific-program" },
  { label: "Committee", href: "/committee" },
  { label: "Venue", href: "/venue" },
  { label: "Contact", href: "/contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative w-full border-t border-border/30 bg-card/30 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          variants={staggeredVariants}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand Section */}
          <motion.div variants={fadeUpVariant} className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={ConferenceDetails.logoSrc}
                alt={ConferenceDetails.logoAlt}
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-serif text-lg font-bold">{ConferenceDetails.title}</h3>
                <p className="text-xs text-muted-foreground">Dehradun</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {ConferenceDetails.eventSubtitle}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="size-4 text-primary" />
              <span>{ConferenceDetails.eventDetails.dates}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUpVariant} className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUpVariant} className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <a
                href={ConferenceDetails.contact.emailHref}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0" />
                <span>{ConferenceDetails.contact.email}</span>
              </a>
              <a
                href={ConferenceDetails.contact.phoneHref}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0" />
                <span>{ConferenceDetails.contact.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 mt-0.5" />
                <span>
                  {ConferenceDetails.address.line1}, {ConferenceDetails.address.line2}
                  <br />
                  {ConferenceDetails.address.line3}, {ConferenceDetails.address.line4}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Event Partner */}
          <motion.div variants={fadeUpVariant} className="space-y-4">
            <h4 className="font-semibold text-foreground">Event Partner</h4>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg border border-border/50 bg-background/50 p-3">
                <Image
                  src={OrganizerContactData.eventPartner.logoSrc}
                  alt={OrganizerContactData.eventPartner.logoAlt}
                  width={100}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-medium text-foreground">
                  {OrganizerContactData.eventPartner.name}
                </p>
                <a
                  href={OrganizerContactData.conferenceManager.contact.emailHref}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Mail className="size-3" />
                  {OrganizerContactData.conferenceManager.contact.email}
                </a>
                <a
                  href={OrganizerContactData.conferenceManager.contact.phoneHref}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Phone className="size-3" />
                  {OrganizerContactData.conferenceManager.contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeUpVariant}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 sm:flex-row"
        >
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} {ConferenceDetails.title}. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground">
            Organized under the aegis of Indian Society of Nephrology - North Zone
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

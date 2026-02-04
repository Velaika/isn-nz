"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  Download,
  FileText,
  Handshake,
  MapPin,
  ScrollText,
  UserPlus,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  eventDetails as eventDetailsData,
  resourceLinks as resourceLinksData,
  welcomeMessage as welcomeMessageData,
} from "@/lib/constants/welcomeMessage";
import { cn } from "@/lib/utils";

// --- Type Definitions ---
interface WelcomeMessageData {
  greeting: string;
  paragraphs: string[];
  closing: {
    text: string;
  };
}
interface EventDetailsData {
  imageSrc: string;
  title: string;
  date: string;
  location: string;
}
interface ResourceLinkData {
  label: string;
  icon: string;
  href: string;
  disabled?: boolean;
}
const welcomeMessage: WelcomeMessageData = welcomeMessageData;
const eventDetails: EventDetailsData = eventDetailsData;
const resourceLinks: ResourceLinkData[] = resourceLinksData;

// --- Type-Safe Icon Mapping ---
const iconMap: Record<string, LucideIcon> = {
  Download,
  MapPin,
  Handshake,
  BookOpen,
  UserPlus,
  ScrollText,
};
const getIconComponent = (iconName: string): LucideIcon =>
  iconMap[iconName] || FileText;

// --- Main Welcome Section Component ---
export const WelcomeMessage = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    className="relative w-full overflow-hidden py-24 md:py-32"
    id="welcome-message"
  >
    {/* Background decorations */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-accent/5 to-transparent" />
    </div>

    <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <WelcomeHeader />
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <WelcomeContent />
        <WelcomeSidebar />
      </div>
    </div>
  </motion.section>
);

// --- Sub-components ---

const itemVariants = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  hidden: { y: 30, opacity: 0 },
};

const WelcomeHeader = React.memo(() => (
  <motion.div variants={itemVariants} className="mb-20 text-center">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring" }}
      className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-lg shadow-primary/25"
    >
      <span className="text-3xl">🏔️</span>
    </motion.div>
    <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
      Welcome to{" "}
      <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        NZ-ISNCON 2026
      </span>
    </h2>
    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
      Bridging Science, Innovation, and Clinical Practice in Nephrology
    </p>
  </motion.div>
));
WelcomeHeader.displayName = "WelcomeHeader";

const WelcomeContent = () => (
  <motion.div
    variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    className="space-y-8 lg:col-span-7"
  >
    {/* Greeting card */}
    <motion.div
      variants={itemVariants}
      className="rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 shadow-sm"
    >
      <p className="font-serif text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
        {welcomeMessage.greeting}
      </p>
    </motion.div>

    {/* Message paragraphs */}
    <motion.div
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="space-y-6"
    >
      {welcomeMessage.paragraphs.map((p: string, i: number) => (
        <motion.p
          variants={itemVariants}
          key={i}
          className="text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {p}
        </motion.p>
      ))}
    </motion.div>

    {/* Signature/Closing */}
    <motion.div
      variants={itemVariants}
      className="mt-10 border-l-4 border-primary pl-6"
    >
      <p className="font-medium text-foreground">Regards,</p>
      <p className="mt-1 text-sm font-semibold text-primary">
        NZ-ISNCON 2026 Organizing Committee
      </p>
    </motion.div>
  </motion.div>
);

const WelcomeSidebar = () => (
  <motion.div variants={itemVariants} className="lg:col-span-5">
    <div className="sticky top-28 space-y-6">
      <EventInfoCard />
      <ResourcesCard />
      <RegisterButton />
    </div>
  </motion.div>
);

const EventInfoCard = React.memo(() => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="group"
  >
    <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary to-primary/80 p-0 shadow-xl shadow-primary/20">
      <div className="relative aspect-[4/3]">
        <Image
          src={eventDetails.imageSrc}
          alt="Conference Venue"
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover opacity-30 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
          <h3 className="text-3xl font-bold">{eventDetails.title}</h3>
          <div className="mt-6 space-y-4">
            <EventDetail
              icon={Calendar}
              label="Date"
              value={eventDetails.date}
            />
            <EventDetail
              icon={MapPin}
              label="Location"
              value={eventDetails.location}
            />
          </div>
        </div>
      </div>
    </Card>
  </motion.div>
));
EventInfoCard.displayName = "EventInfoCard";

const EventDetail = ({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
      <Icon className="size-6" />
    </div>
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-white/70">
        {label}
      </p>
      <span className="text-lg font-semibold">{value}</span>
    </div>
  </div>
);

const ResourcesCard = React.memo(() => (
  <Card className="border-border/50 bg-card/80 p-6 backdrop-blur-sm">
    <h3 className="mb-5 text-lg font-bold">Conference Resources</h3>
    <div className="space-y-1">
      {resourceLinks.map((link) => {
        const Icon = getIconComponent(link.icon);
        return (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.endsWith(".pdf") ? "_blank" : undefined}
            className={cn(
              "group flex items-center justify-between rounded-xl p-3 transition-all duration-200",
              link.disabled
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-primary/5",
            )}
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex size-9 items-center justify-center rounded-lg",
                  link.disabled ? "bg-muted" : "bg-primary/10",
                )}
              >
                <Icon
                  className={cn(
                    "size-4",
                    link.disabled ? "text-muted-foreground" : "text-primary",
                  )}
                />
              </div>
              <span className="text-sm font-medium">{link.label}</span>
            </div>
            {!link.disabled ? (
              <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            ) : (
              <Badge variant="secondary" className="text-[10px]">
                Coming Soon
              </Badge>
            )}
          </Link>
        );
      })}
    </div>
  </Card>
));
ResourcesCard.displayName = "ResourcesCard";

const RegisterButton = React.memo(() => (
  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
    <Button
      className="group w-full gap-2 rounded-xl py-7 text-lg font-bold shadow-lg shadow-primary/25"
      asChild
      size="lg"
    >
      <Link href="/registration">
        Register Now
        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  </motion.div>
));
RegisterButton.displayName = "RegisterButton";

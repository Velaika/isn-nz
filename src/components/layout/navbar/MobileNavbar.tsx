"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CONFERENCE_DETAILS } from "@/lib/constants/contact-data";
import { cn } from "@/lib/utils";
import type { NavItemType } from "@/types";

export const MobileNavigation = ({ items }: { items: NavItemType[] }) => {
  return (
    <div className="flex items-center gap-2 xl:hidden">
      <ThemeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-9 w-9 relative group",
              "hover:bg-primary/10",
              "transition-colors duration-200",
            )}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full sm:w-[400px] border-l border-border/40 p-0 bg-background"
          title="Navigation Menu"
        >
          <div className="flex flex-col h-full">
            <MobileNavHeader />
            <div className="flex-1 overflow-auto">
              <MobileNavAccordion items={items} />
            </div>
            <MobileNavFooter />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const MobileNavHeader = () => {
  return (
    <div className="sticky top-0 z-20 bg-background border-b border-border/40">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logos */}
        <div className="flex items-center gap-3">
          <div className="relative size-10 overflow-hidden rounded-lg bg-background">
            <Image
              src="/nz-isncon-logo.png"
              alt="NZ-ISNCON"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="relative size-10 overflow-hidden rounded-lg bg-background">
            <Image
              src="/isn-logo.png"
              alt="ISN"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
        </div>

        {/* Close button */}
        <SheetClose className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-accent transition-colors">
          <X className="h-5 w-5" />
          <span className="sr-only">Close menu</span>
        </SheetClose>
      </div>

      {/* Conference info */}
      <div className="px-6 pb-4">
        <div className="flex items-baseline gap-2 mb-1">
          <h2 className="text-lg font-bold">NZ-ISNCON</h2>
          <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-primary text-primary-foreground">
            2026
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          30th Annual Conference
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/50 border border-border/40">
          <span className="text-xs">📅</span>
          <span className="text-xs font-medium">
            10-12 April 2026 • Dehradun
          </span>
        </div>
      </div>
    </div>
  );
};

const MobileNavAccordion = ({ items }: { items: NavItemType[] }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <nav className="px-4 py-6 space-y-1">
      {items.map((item, index) => (
        <div key={item.label}>
          {item.children ? (
            <div className="rounded-lg overflow-hidden border border-border/40 bg-card">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-left transition-colors",
                  openIndex === index
                    ? "bg-accent text-foreground"
                    : "hover:bg-accent/50",
                )}
              >
                <span className="text-sm font-semibold flex items-center gap-2">
                  {item.label}
                  {item.featured && (
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                  )}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform duration-200",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-2 pb-2 space-y-1 bg-accent/30">
                      {item.children.map((child) => (
                        <SheetClose key={child.label} asChild>
                          <Link
                            href={child.href}
                            className={cn(
                              "flex items-center justify-between px-3 py-2.5 rounded-md group",
                              "hover:bg-background/80 transition-colors",
                            )}
                          >
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              {child.label}
                            </span>
                            {child.badge && (
                              <Badge
                                variant="secondary"
                                className="text-[10px] px-1.5 py-0 h-5"
                              >
                                {child.badge}
                              </Badge>
                            )}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <SheetClose asChild>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-lg transition-colors",
                  "border border-border/40 bg-card hover:bg-accent/50",
                  item.featured && "bg-primary/5 border-primary/20",
                )}
              >
                <span className="text-sm font-semibold flex items-center gap-2">
                  {item.label}
                  {item.featured && (
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                  )}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </SheetClose>
          )}
        </div>
      ))}
    </nav>
  );
};

const MobileNavFooter = () => {
  const { contact } = CONFERENCE_DETAILS;

  return (
    <div className="sticky bottom-0 z-20 bg-background border-t border-border/40 px-4 py-4 space-y-3">
      {/* Register button */}
      <SheetClose asChild>
        <Button
          asChild
          className={cn(
            "w-full h-11 rounded-lg font-semibold",
            "bg-primary hover:bg-primary/90",
            "transition-colors",
          )}
        >
          <Link
            href="/registration"
            className="flex items-center justify-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            <span>Register Now</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </SheetClose>

      {/* Contact buttons */}
      <div className="grid grid-cols-2 gap-2">
        <Link
          href={contact.phoneHref}
          className={cn(
            "flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg",
            "border border-border/40 bg-card hover:bg-accent/50",
            "transition-colors",
          )}
        >
          <Phone className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Call</span>
        </Link>

        <Link
          href={contact.emailHref}
          className={cn(
            "flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg",
            "border border-border/40 bg-card hover:bg-accent/50",
            "transition-colors",
          )}
        >
          <Mail className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Email</span>
        </Link>
      </div>
    </div>
  );
};

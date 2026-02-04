"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ConferenceDetails } from "@/lib/constants/contact";
import { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const MobileNavigation = ({ items }: { items: NavItem[] }) => {
  return (
    <div className="flex items-center xl:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-10 w-10 relative group",
              "hover:bg-primary/10 active:bg-primary/20",
              "transition-all duration-300 ease-out",
              "rounded-xl border border-transparent hover:border-primary/20",
            )}
          >
            <div className="relative">
              <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
            </div>
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[320px] max-w-[90vw] border-l-0 pr-0 bg-gradient-to-br from-background via-background to-accent/5 backdrop-blur-xl shadow-2xl"
          title="Mobile Navigation Menu"
        >
          <div className="flex flex-col h-full relative">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/10 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <MobileNavHeader />
              <div className="flex-1 overflow-auto py-2">
                <MobileNavAccordion items={items} />
              </div>
              <MobileNavFooter />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const MobileNavHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="px-6 py-6 border-b border-gradient-to-r from-transparent via-border/60 to-transparent relative"
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="space-y-1">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-serif"
            >
              NZ-ISNCON <span className="text-primary">2026</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs text-muted-foreground font-medium"
            >
              Annual Conference of ISN-NZ
            </motion.p>
          </div>
        </div>
        <SheetClose
          className={cn(
            "rounded-xl h-10 w-10 flex items-center justify-center group",
            "border border-border/40 hover:border-destructive/40 bg-card/50 backdrop-blur-sm",
            "hover:bg-destructive/10 transition-all duration-300 ease-out",
            "shadow-sm hover:shadow-md",
          )}
        >
          <X className="h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:text-destructive" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </div>
    </motion.div>
  );
};

const MobileNavAccordion = ({ items }: { items: NavItem[] }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="space-y-2 px-4">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden"
        >
          {item.children ? (
            <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  "flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold transition-all duration-300",
                  "hover:bg-accent/30 group relative overflow-hidden",
                  openIndex === index
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary",
                  item.featured &&
                  "bg-gradient-to-r from-primary/10 to-accent/10 text-primary",
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  {item.label}
                  {item.featured && <Sparkles className="h-3 w-3" />}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-all duration-300 text-muted-foreground relative",
                    openIndex === index
                      ? "rotate-180 text-primary scale-110"
                      : "group-hover:text-primary",
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-border/30"
                  >
                    <div className="px-2 py-3 bg-accent/20 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <motion.div
                          key={child.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: childIndex * 0.1,
                            ease: "easeOut",
                          }}
                        >
                          <Link
                            href={child.href}
                            className={cn(
                              "flex items-center justify-between px-4 py-3 text-sm font-medium relative group overflow-hidden",
                              "bg-background/40 hover:bg-primary/10 rounded-xl transition-all duration-300",
                              "border border-transparent hover:border-primary/20",
                              "shadow-sm hover:shadow-md backdrop-blur-sm",
                            )}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative group-hover:translate-x-1 transition-transform duration-300 text-foreground group-hover:text-primary flex items-center gap-2">
                              {child.label}
                              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            </span>
                            {child.badge && (
                              <Badge
                                variant="secondary"
                                className={cn(
                                  "ml-2 text-[10px] font-semibold px-2.5 py-1 relative",
                                  "bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30",
                                  "group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300",
                                  "shadow-sm group-hover:shadow-md rounded-full",
                                )}
                              >
                                {child.badge}
                              </Badge>
                            )}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              href={item.href}
              className={cn(
                "block px-5 py-4 text-sm font-semibold rounded-2xl transition-all duration-300 group relative overflow-hidden",
                "bg-card/30 backdrop-blur-sm border border-border/40 hover:border-primary/40",
                "hover:bg-primary/10 hover:shadow-md shadow-sm",
                item.featured &&
                "bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/30",
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-2 text-foreground group-hover:text-primary">
                {item.label}
                {item.featured && <Sparkles className="h-3 w-3" />}
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </span>
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const MobileNavFooter = () => {
  const { contact } = ConferenceDetails;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
      className="px-4 py-4 border-t border-border/30 mt-auto space-y-3 bg-card/20"
    >
      <Button
        asChild
        className={cn(
          "w-full shadow-md bg-primary text-primary-foreground",
          "hover:bg-primary/90 rounded-xl h-10 font-semibold text-sm",
          "transition-all duration-200 hover:shadow-lg",
        )}
      >
        <Link href="/registration" className="flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Register Now
        </Link>
      </Button>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <Link
          href={contact.phoneHref}
          className="flex items-center gap-2 p-2.5 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors border border-border/40 hover:border-primary/30"
        >
          <Phone className="h-3.5 w-3.5 text-primary flex-shrink-0" />
          <span className="text-foreground truncate">{contact.phone}</span>
        </Link>

        <Link
          href={contact.emailHref}
          className="flex items-center gap-2 p-2.5 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors border border-border/40 hover:border-primary/30"
        >
          <Mail className="h-3.5 w-3.5 text-primary flex-shrink-0" />
          <span className="text-foreground truncate">Contact</span>
        </Link>
      </div>

      <div className="flex justify-center pt-2">
        <ThemeToggle />
      </div>
    </motion.div>
  );
};

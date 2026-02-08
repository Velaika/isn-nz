"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NavItemType } from "@/types";

export const DesktopNavigation = ({ items }: { items: NavItemType[] }) => {
  return (
    <div className="hidden xl:flex lg:items-center lg:gap-x-1">
      <nav className="flex items-center gap-1">
        {items.map((item) => (
          <DesktopNavItem key={item.label} item={item} />
        ))}
      </nav>

      <div className="flex items-center gap-3 ml-6 pl-6 border-l border-border/40">
        <Button
          asChild
          size="sm"
          className={cn(
            "group relative overflow-hidden rounded-full px-7 py-2.5 h-auto",
            "bg-gradient-to-r from-primary via-primary to-primary/90",
            "text-primary-foreground font-semibold",
            "shadow-lg shadow-primary/30 transition-all duration-300",
            "hover:shadow-xl hover:shadow-primary/40 hover:scale-105",
            "active:scale-95",
          )}
        >
          <Link href="/registration" className="flex items-center gap-2">
            <span>Register Now</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "linear",
              }}
            />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const DesktopNavItem = ({ item }: { item: NavItemType }) => {
  const [isHovering, setIsHovering] = useState(false);

  if (item.children) {
    return (
      <div
        className="group relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <button
          className={cn(
            "relative flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold",
            "text-foreground/70 transition-all duration-200",
            "hover:text-foreground hover:bg-primary/5",
            isHovering && "text-foreground bg-primary/5",
          )}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={cn(
              "size-4 text-muted-foreground transition-all duration-300",
              isHovering && "rotate-180 text-primary",
            )}
          />
        </button>

        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2"
            >
              <div
                className={cn(
                  "min-w-[260px] overflow-hidden rounded-2xl border border-border/50",
                  "bg-popover/98 backdrop-blur-xl shadow-2xl shadow-black/10",
                  "ring-1 ring-black/5",
                )}
              >
                <div className="p-2 space-y-1">
                  {item.children.map((child, index) => (
                    <motion.div
                      key={child.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={child.href}
                        className={cn(
                          "group/item flex items-center justify-between rounded-xl px-4 py-3",
                          "text-sm font-medium text-popover-foreground/80",
                          "transition-all duration-200",
                          "hover:bg-primary/10 hover:text-foreground",
                          "active:scale-[0.98]",
                        )}
                      >
                        <span className="transition-colors group-hover/item:text-primary">
                          {child.label}
                        </span>
                        {child.badge && (
                          <Badge
                            variant="secondary"
                            className="ml-2 bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary border-none"
                          >
                            {child.badge}
                          </Badge>
                        )}
                        <ArrowRight className="size-3.5 text-muted-foreground opacity-0 transition-all duration-200 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-primary" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative rounded-lg px-4 py-2.5 text-sm font-semibold",
        "text-foreground/70 transition-all duration-200",
        "hover:text-foreground hover:bg-primary/5",
        item.featured && "text-primary hover:text-primary",
      )}
    >
      <span>{item.label}</span>
      {/* Animated underline effect */}
      <motion.span
        className="absolute bottom-1.5 left-4 right-4 h-0.5 rounded-full bg-primary"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </Link>
  );
};

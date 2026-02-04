"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const DesktopNavigation = ({ items }: { items: NavItem[] }) => {
  return (
    <div className="hidden xl:flex lg:items-center lg:gap-x-2">
      <nav className="flex items-center">
        {items.map((item) => (
          <DesktopNavItem key={item.label} item={item} />
        ))}
      </nav>

      <div className="flex items-center gap-3 ml-6 pl-6 border-l border-border/40">
        <Button
          asChild
          size="sm"
          className={cn(
            "group relative overflow-hidden rounded-full px-6 py-2.5",
            "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground",
            "shadow-lg shadow-primary/25 transition-all duration-300",
            "hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]",
          )}
        >
          <Link href="/registration" className="flex items-center gap-2">
            Register Now
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const DesktopNavItem = ({ item }: { item: NavItem }) => {
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
            "relative flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium",
            "text-foreground/80 transition-colors duration-200",
            "hover:text-foreground",
            isHovering && "text-foreground",
          )}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={cn(
              "size-4 text-muted-foreground transition-transform duration-200",
              isHovering && "rotate-180 text-foreground",
            )}
          />
          {/* Animated underline */}
          <motion.span
            className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovering ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>

        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3"
            >
              <div
                className={cn(
                  "min-w-[240px] overflow-hidden rounded-2xl border border-border/50",
                  "bg-popover/95 p-2 shadow-2xl backdrop-blur-xl",
                )}
              >
                {item.children.map((child, index) => (
                  <motion.div
                    key={child.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link
                      href={child.href}
                      className={cn(
                        "group/item flex items-center justify-between rounded-xl px-4 py-3",
                        "text-sm text-popover-foreground transition-all duration-200",
                        "hover:bg-primary/10",
                      )}
                    >
                      <span className="font-medium transition-colors group-hover/item:text-primary">
                        {child.label}
                      </span>
                      {child.badge && (
                        <Badge
                          variant="secondary"
                          className="ml-2 bg-accent/50 px-2 py-0.5 text-[10px] font-semibold text-accent-foreground"
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
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative px-4 py-2.5 text-sm font-medium",
        "text-foreground/80 transition-colors duration-200",
        "hover:text-foreground",
        item.featured && "text-primary",
      )}
    >
      <span>{item.label}</span>
      {/* Hover underline effect */}
      <span className="absolute bottom-1 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-200 group-hover:scale-x-100" />
    </Link>
  );
};

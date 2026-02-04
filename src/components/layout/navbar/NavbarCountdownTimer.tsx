"use client";

import { Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useConferenceStatus } from "@/hooks/useConferenceStatus";

/**
 * Redesigned announcement banner with proper theming support
 */
const AnnouncementBanner = () => {
  const { status, timeText, daysUntilStart } = useConferenceStatus();

  // Don't render the banner if the conference has ended or is still loading
  if (status === "ended" || status === "loading") {
    return <></>;
  }

  const isUrgent = daysUntilStart !== undefined && daysUntilStart <= 7;

  return (
    <div
      className={cn(
        "relative overflow-hidden border-b px-4 py-3 text-sm sm:px-7",
        status === "ongoing"
          ? "border-accent/30 bg-accent/10"
          : isUrgent
            ? "border-destructive/30 bg-destructive/10"
            : "border-primary/20 bg-primary/5",
      )}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
            "linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.1) 100%, transparent 0%)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between sm:gap-4">
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div
            className={cn(
              "flex size-8 items-center justify-center rounded-full",
              status === "ongoing"
                ? "bg-accent/20"
                : isUrgent
                  ? "bg-destructive/20"
                  : "bg-primary/10",
            )}
          >
            {status === "ongoing" ? (
              <Sparkles className={cn("size-4", "text-accent-foreground")} />
            ) : (
              <Clock
                className={cn(
                  "size-4",
                  isUrgent ? "text-destructive" : "text-primary",
                )}
              />
            )}
          </div>

          {/* Text */}
          <div>
            <span
              className={cn(
                "font-semibold",
                status === "ongoing"
                  ? "text-accent-foreground"
                  : isUrgent
                    ? "text-destructive"
                    : "text-foreground",
              )}
            >
              {status === "ongoing"
                ? "Conference is Live!"
                : "Conference Begins In"}
            </span>
            <span
              className={cn(
                "ml-2 font-bold",
                status === "ongoing"
                  ? "text-accent-foreground"
                  : isUrgent
                    ? "text-destructive"
                    : "text-primary",
              )}
            >
              {timeText}
            </span>
          </div>
        </div>

        {status === "countdown" && (
          <Link
            href="/registration"
            className={cn(
              "group inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200",
              "bg-primary text-primary-foreground shadow-md hover:shadow-lg",
              "hover:scale-105",
            )}
          >
            <span className="hidden sm:inline">Register Now</span>
            <span className="sm:hidden">Register</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default AnnouncementBanner;

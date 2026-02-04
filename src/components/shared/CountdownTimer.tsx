"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CONFERENCE_DATE,
  CONFERENCE_END_DATE,
} from "@/lib/constants/conferenceDetails";

// --- Types ---
type ConferenceStatus = "countdown" | "ongoing" | "ended" | "loading";
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
interface TimeUnit {
  value: string;
  label: string;
}

// --- Custom Hook for Countdown Logic ---

/**
 * All timer and state logic encapsulated in this custom hook.
 */
const useConferenceCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [status, setStatus] = useState<ConferenceStatus>("loading");

  const conferenceStartTime = useMemo(() => targetDate.getTime(), [targetDate]);
  const conferenceEndTime = useMemo(
    () => new Date(CONFERENCE_END_DATE).getTime(),
    [],
  );

  useEffect(() => {
    const calculateState = () => {
      const now = Date.now();
      if (now >= conferenceEndTime) {
        setStatus("ended");
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      if (now >= conferenceStartTime) {
        setStatus("ongoing");
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setStatus("countdown");
      const difference = conferenceStartTime - now;
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateState();
    const timer = setInterval(calculateState, 1000);
    return () => clearInterval(timer);
  }, [conferenceStartTime, conferenceEndTime]);

  return { timeLeft, status };
};

// --- Main Component ---

/**
 * Redesigned countdown timer with proper theming support
 */
export const CountdownSection = () => {
  const conferenceDate = useMemo(() => new Date(CONFERENCE_DATE), []);
  const { timeLeft, status } = useConferenceCountdown(conferenceDate);

  const formatNumber = (num: number, digits: number = 2) =>
    num.toString().padStart(digits, "0");

  const timeUnits: TimeUnit[] = [
    { value: formatNumber(timeLeft.days, 3), label: "Days" },
    { value: formatNumber(timeLeft.hours), label: "Hours" },
    { value: formatNumber(timeLeft.minutes), label: "Minutes" },
    { value: formatNumber(timeLeft.seconds), label: "Seconds" },
  ];

  const messages = {
    countdown: {
      header: "Conference Begins In",
      body: "Join us for the 30th Annual Conference of ISN-NZ.",
    },
    ongoing: {
      header: "Conference In Progress",
      body: "The event is currently taking place at Hyatt Centric, Dehradun.",
    },
    ended: {
      header: "Conference Concluded",
      body: "Thank you for being part of NZ-ISNCON 2026.",
    },
    loading: { header: "Loading Timer...", body: "Please wait a moment." },
  };

  const { header, body } = messages[status];

  const staggeredVariants = {
    visible: { transition: { staggerChildren: 0.15 } },
    hidden: {},
  };

  const fadeUpVariant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
    hidden: { y: 20, opacity: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggeredVariants}
      className="w-full text-center"
    >
      {/* Badge */}
      <motion.div
        variants={fadeUpVariant}
        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
      >
        <CalendarClock className="size-4" />
        ISN-NZ Nephrology Conference
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        variants={fadeUpVariant}
        className="mt-6 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
      >
        Bridging Science, Innovation, and Clinical Practice
      </motion.h1>

      {/* Countdown Card */}
      <motion.div
        variants={fadeUpVariant}
        className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-6 shadow-xl backdrop-blur-md sm:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {header}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>

        {status === "countdown" && (
          <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-6">
            {timeUnits.map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="flex">
                  {unit.value.split("").map((digit, index) => (
                    <ScrollingDigit key={index} digit={digit} />
                  ))}
                </div>
                <span className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* CTA Button */}
      <motion.div variants={fadeUpVariant} className="mt-10">
        <Button
          asChild
          size="lg"
          className="group gap-2 rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-primary/25"
        >
          <Link href="/registration">
            Register Now
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </motion.section>
  );
};

// --- Sub-components ---

/**
 * A "slot machine" style scrolling digit for clean animation.
 */
const ScrollingDigit = React.memo(({ digit }: { digit: string }) => {
  const numericValue = parseInt(digit, 10);
  const height = "h-[1.1em]";

  return (
    <div
      className={cn(
        "relative w-[0.65em] overflow-hidden text-4xl font-bold text-foreground sm:text-5xl md:text-6xl",
        height,
      )}
    >
      <AnimatePresence>
        <motion.div
          key={numericValue}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {digit}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});
ScrollingDigit.displayName = "ScrollingDigit";

import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Key information items
 */
const infoItems = [
  {
    label: "10-12 April 2026",
    icon: Calendar,
  },
  {
    label: "Dehradun, India",
    icon: MapPin,
  },
  {
    label: "30th Annual Conference",
    icon: Users,
  },
];

/**
 * Modern, mobile-optimized information bar
 */
export const InfoBar = () => (
  <div className="relative border-y border-border/40 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
    <div className="container mx-auto px-4 py-4 sm:py-5 lg:px-6">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between lg:gap-6">
        {/* Left: Conference Title (Hidden on mobile, shown on tablet+) */}
        <div className="hidden text-center sm:block sm:text-left">
          <h2 className="text-lg font-bold text-foreground lg:text-xl">
            NZ-ISNCON 2026
          </h2>
          <p className="text-xs text-muted-foreground lg:text-sm">
            Bridging Science, Innovation & Clinical Practice
          </p>
        </div>

        {/* Center: Info Items */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-5">
          {infoItems.map((item) => (
            <InfoItem key={item.label} item={item} />
          ))}
        </div>

        {/* Right: CTA */}
        <Button
          asChild
          size="sm"
          className={cn(
            "group rounded-lg font-semibold shadow-sm hover:shadow-md",
            "bg-primary hover:bg-primary/90 transition-all",
            "sm:px-6 lg:px-8",
          )}
        >
          <Link href="/registration" className="flex items-center gap-2">
            <span className="hidden sm:inline">Register Now</span>
            <span className="sm:hidden">Register</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </div>
  </div>
);

/**
 * Individual info item
 */
const InfoItem = ({
  item,
}: {
  item: {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  };
}) => {
  const Icon = item.icon;

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border border-border/40 bg-card px-3 py-2 shadow-sm",
        "hover:bg-accent/50 transition-colors",
      )}
    >
      <div className="flex size-7 items-center justify-center rounded-md bg-primary/10">
        <Icon className="size-3.5 text-primary" />
      </div>
      <span className="text-xs font-medium text-foreground sm:text-sm">
        {item.label}
      </span>
    </div>
  );
};

import { OrganizerProps } from "@/lib/types";
import { LucideIcon, LucideProps } from "lucide-react";
import { ReactNode } from "react";

export interface LayoutPropsType {
  /** Optional class names to apply to the main layout container. */
  className?: string;
  /** The content to be rendered within the layout. */
  children: ReactNode;
  /** Determines if the navigation bar is displayed. Defaults to `true`. */
  showNav?: boolean;
  /** Determines if the footer is displayed. Defaults to `true`. */
  showFooter?: boolean;
}

export type ConferenceStatus = "countdown" | "ongoing" | "ended" | "loading";
export interface ConferenceStateType {
  status: ConferenceStatus;
  timeText: string;
  daysUntilStart?: number;
}

export interface ContactInfoLinkPropsType {
  icon: React.ElementType<LucideProps>;
  href: string;
  text: string;
}

export interface NavigationButtonPropsType {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}

export interface CarouselProgressPropsType {
  isPaused: boolean;
  onComplete: () => void;
  duration?: number;
}

export interface ConferenceHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface OverviewItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export type CommitteeType =
  | "patrons"
  | "advisors"
  | "organizing"
  | "scientific"
  | "international"
  | "national";

export interface TabConfig {
  id: CommitteeType;
  label: string;
  icon: LucideIcon;
  description: string;
}

export interface CommitteeTabsProps {
  activeTab: CommitteeType;
  setActiveTab: (tab: CommitteeType) => void;
  committeeDataMap: Record<CommitteeType, OrganizerProps[]>;
}

export interface Detail {
  icon: LucideIcon;
  title: string;
  content: string;
  subtitle: string;
}

export interface PricingOption {
  category: string;
  earlyBird: string;
  regular: string;
  late?: string;
  spotRegistration?: string;
  popular?: boolean;
}

export interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SponsorshipTier {
  name: string;
  price: string;
  description: string;
  benefits: string[];
  featured?: boolean;
}

export interface Benefit {
  name: string;
  description: string;
  icon: LucideIcon;
}

// Defines which benefits each tier gets.
// The key is the benefit name, and the value is what to display in the table.
export type TierBenefits = Record<string, string | boolean>;

export interface SponsorshipPackage {
  name: string;
  price: string;
  benefits: TierBenefits;
}

import type { LucideIcon, LucideProps } from "lucide-react";
import type { ReactNode } from "react";
import type { OrganizerPropsType } from "./common";

export interface LayoutPropsType {
  /** Optional class names to apply to the main layout container. */
  className?: string;
  /** The content to be rendered within the layout. */
  children: ReactNode;
  /** Determines if the navigation bar is displayed. Defaults to `true`. */
  showNav?: boolean;
  /** Determines if the Footer is displayed. Defaults to `true`. */
  showFooter?: boolean;
}

export type ConferenceStatusType =
  | "countdown"
  | "ongoing"
  | "ended"
  | "loading";
export interface ConferenceStateType {
  status: ConferenceStatusType;
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

export interface ConferenceHighlightType {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface OverviewItemType {
  icon: LucideIcon;
  title: string;
  description: string;
}

export type CommitteeTypeType =
  | "patrons"
  | "advisors"
  | "organizing"
  | "scientific"
  | "international"
  | "national";

export interface TabConfigType {
  id: CommitteeTypeType;
  label: string;
  icon: LucideIcon;
  description: string;
}

export interface CommitteeTabsPropsType {
  activeTab: CommitteeTypeType;
  setActiveTab: (tab: CommitteeTypeType) => void;
  committeeDataMap: Record<CommitteeTypeType, OrganizerPropsType[]>;
}

export interface DetailType {
  icon: LucideIcon;
  title: string;
  content: string;
  subtitle: string;
}

export interface PricingOptionType {
  category: string;
  earlyBird: string;
  regular: string;
  late?: string;
  spotRegistration?: string;
  popular?: boolean;
}

export interface HighlightType {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SponsorshipTierType {
  name: string;
  price: string;
  description: string;
  benefits: string[];
  featured?: boolean;
}

export interface BenefitType {
  name: string;
  description: string;
  icon: LucideIcon;
}

// Defines which benefits each tier gets.
// The key is the BenefitType name, and the value is what to display in the table.
export type TierBenefitsType = Record<string, string | boolean>;

export interface SponsorshipPackageType {
  name: string;
  price: string;
  benefits: TierBenefitsType;
}

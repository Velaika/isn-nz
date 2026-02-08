import { Building, Megaphone, Star, Tv, Users } from "lucide-react";
import type {
  BenefitType,
  SponsorshipPackageType,
  SponsorshipTierType,
} from "@/types/ui";

/**
 * Defines the different sponsorship tiers available.
 */
export const SPONSORSHIP_TIERS: SponsorshipTierType[] = [
  {
    name: "Silver Partner",
    price: "To Be Announced",
    description: "Details coming soon for essential visibility package.",
    benefits: [
      "Logo on conference website (TBA)",
      "Acknowledgement in proceedings (TBA)",
      "One complimentary registration (TBA)",
    ],
  },
  {
    name: "Gold Partner",
    price: "To Be Announced",
    description: "Details coming soon for enhanced presence package.",
    benefits: [
      "All Silver benefits included (TBA)",
      "Logo on main stage banner (TBA)",
      "Exhibition booth space (TBA)",
      "Two complimentary registrations (TBA)",
    ],
  },
  {
    name: "Platinum Partner",
    price: "To Be Announced",
    description: "Details coming soon for maximum exposure package.",
    benefits: [
      "All Gold benefits included (TBA)",
      "Keynote session branding (TBA)",
      "Full-page ad in program (TBA)",
      "Exhibition booth in prime location (TBA)",
      "Four complimentary registrations (TBA)",
    ],
  },
];

/**
 * A list of all possible benefits a sponsor can receive.
 */
export const ALL_BENEFITS: BenefitType[] = [
  {
    name: "Logo on Website",
    description:
      "Your company logo displayed on our official conference website. (TBA)",
    icon: Tv,
  },
  {
    name: "Exhibition Booth",
    description:
      "A dedicated booth space in the exhibition hall to showcase your products. (TBA)",
    icon: Building,
  },
  {
    name: "Ad in Program",
    description:
      "An advertisement featured in the official printed conference program. (TBA)",
    icon: Megaphone,
  },
  {
    name: "Stage Acknowledgement",
    description:
      "Verbal acknowledgement of your sponsorship from the main stage. (TBA)",
    icon: Megaphone,
  },
  {
    name: "Complimentary Registrations",
    description:
      "Free passes for your team members to attend the conference. (TBA)",
    icon: Users,
  },
  {
    name: "Keynote Branding",
    description: "Exclusive branding rights for a keynote session. (TBA)",
    icon: Star,
  },
];

/**
 * Defines the specific benefits for each package tier for the comparison table.
 */
export const SPONSORSHIP_PACKAGES: SponsorshipPackageType[] = [
  {
    name: "Silver",
    price: "To Be Announced",
    benefits: {
      "Logo on Website": "TBA",
      "Exhibition Booth": "TBA",
      "Ad in Program": "TBA",
      "Stage Acknowledgement": "TBA",
      "Complimentary Registrations": "TBA",
      "Keynote Branding": "TBA",
    },
  },
  {
    name: "Gold",
    price: "To Be Announced",
    benefits: {
      "Logo on Website": "TBA",
      "Exhibition Booth": "TBA",
      "Ad in Program": "TBA",
      "Stage Acknowledgement": "TBA",
      "Complimentary Registrations": "TBA",
      "Keynote Branding": "TBA",
    },
  },
  {
    name: "Platinum",
    price: "To Be Announced",
    benefits: {
      "Logo on Website": "TBA",
      "Exhibition Booth": "TBA",
      "Ad in Program": "TBA",
      "Stage Acknowledgement": "TBA",
      "Complimentary Registrations": "TBA",
      "Keynote Branding": "TBA",
    },
  },
];

import { Detail, Highlight, PricingOption } from "@/types/ui";
import { CalendarClock, MapPin, Users, Mail, Sparkles } from "lucide-react";
import { ConferenceDetails } from "./contact";

// Conference details for NZ-ISNCON 2026
export const conferenceDetails: Detail[] = [
  {
    icon: CalendarClock,
    title: "Conference Dates",
    content: ConferenceDetails.eventDetails.dates,
    subtitle: "Three-day comprehensive nephrology conference",
  },
  {
    icon: MapPin,
    title: "Venue",
    content: ConferenceDetails.address.line2 + ", " + ConferenceDetails.address.line3,
    subtitle: "Hotel Hyatt Centric, Rajpur Road, Dehradun",
  },
  {
    icon: Mail,
    title: "Have Questions?",
    content: ConferenceDetails.contact.email,
    subtitle: "Contact our organizing committee for assistance",
  },
];

// Registration fee structure with multiple pricing tiers
export const pricingOptions: PricingOption[] = [
  {
    category: "Students",
    earlyBird: "₹1,200",
    regular: "₹1,800",
    late: "₹4,200",
    spotRegistration: "₹4,200",
  },
  {
    category: "ISN Members",
    earlyBird: "₹3,000",
    regular: "₹4,200",
    late: "₹4,800",
    spotRegistration: "₹4,800",
    popular: true,
  },
  {
    category: "NON ISN Members",
    earlyBird: "₹4,800",
    regular: "₹6,500",
    late: "₹8,900",
    spotRegistration: "₹8,900",
  },
  {
    category: "Accompanying Person",
    earlyBird: "₹4,200",
    regular: "₹5,400",
    late: "₹7,100",
    spotRegistration: "₹7,100",
  },
];

// Registration deadline dates
export const EARLY_BIRD_DEADLINE = "15th February 2026";
export const REGULAR_DEADLINE = "15th March 2026";
export const LATE_DEADLINE = "Spot Registration";
export const EARLY_BIRD_END_DATE = new Date("2026-02-15T23:59:59");
export const REGULAR_END_DATE = new Date("2026-03-15T23:59:59");

// Bank account details for registration payments
export const bankDetails = {
  accountName: "INDIAN SOCIETY OF NEPHROLOGY NORTHERN ZONE",
  bankName: "Bank of Baroda",
  branch: "DELHI-ARMY HOSPITAL BRANCH",
  state: "DELHI",
  accountNumber: "86000100000819",
  ifscCode: "BARB0VJARHO",
  pan: "AABAI0867P",
  gstin: "07AABAI086P1Z9",
};

// Conference organizing committee contact details
export const registrationContacts = [
  {
    name: "Organizing Team",
    role: "Secretariat",
    phone: "135-614-1234",
    phoneHref: "tel:+911356141234",
  },
];

// Conference highlights with actual program details
export const conferenceHighlights: Highlight[] = [
  {
    icon: Sparkles,
    title: "Expert-Led Sessions & Workshops",
    description:
      "Engage with leading nephrologists and clinical experts through focused sessions on kidney disease management, dialysis innovations, and hypertension updates.",
  },
  {
    icon: Users,
    title: "Diverse Subspecialty Topics",
    description:
      "Explore cutting-edge topics including Diabetic Kidney Disease, Glomerulonephritis, Transplantation Immunology, Critical Care Nephrology, and Pediatric Kidney Health.",
  },
  {
    icon: CalendarClock,
    title: "Three-Day Intensive Program",
    description:
      "April 10-12, 2026 - Comprehensive learning experience featuring interactive workshops, case presentations, and poster reviews covering the latest advances in nephrology.",
  },
];

// Registration form link
export const REGISTRATION_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSfV2MUXXT6GzC9GEzZhGkHC3uaSmFPsX8gclaQTxoYLw78e0w/viewform";

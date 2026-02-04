import { NavItem } from "@/lib/types";

// Main navigation items
export const mainNavItems: NavItem[] = [
  { href: "/", label: "Home", featured: false },
  {
    href: "#",
    label: "About",
    featured: false,
    children: [
      { href: "/#welcome-message", label: "Welcome Message" },
      { href: "/conference-brochure", label: "Conference Brochure" },
      { href: "/scientific-program", label: "Scientific Program" },
      { href: "/committee", label: "Organizing Committee" },
    ],
  },
  {
    href: "#",
    label: "Registration",
    featured: false,
    children: [
      { href: "/registration", label: "Register Here" },
      {
        href: "/abstract-guidelines",
        label: "Abstract Submission",
      },
    ],
  },
  {
    href: "#",
    label: "Venue",
    featured: false,
    children: [
      { href: "/#venue", label: "Conference Venue" },
      { href: "/#tourist-attractions", label: "About Dehradun" },
    ],
  },
  {
    href: "/sponsorship",
    label: "Sponsorships",
    featured: false,
  },
  { href: "/contact", label: "Contact", featured: false },
];

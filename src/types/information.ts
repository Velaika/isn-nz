import { LucideIcon } from "lucide-react";

export interface SubmissionCategory {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface FormatRequirement {
  element: string;
  requirement: string;
  example: React.ReactNode;
}

export interface Guideline {
  icon: LucideIcon;
  text: string;
  colorClassName: string;
}

export interface ResourceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  linkText: string;
  isExternal?: boolean;
}

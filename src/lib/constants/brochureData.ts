import { ResourceItem } from "@/types/information";
import { ConferenceHighlight, OverviewItem } from "@/types/ui";
import {
  Award,
  Calendar,
  Clock,
  Download,
  FileText,
  Monitor,
  Phone,
  Users,
  Video,
} from "lucide-react";

/**
 * Key highlights of the scientific program.
 */
export const conferenceHighlights: ConferenceHighlight[] = [
  {
    icon: Video,
    title: "Case-Based Participative Learning",
    description:
      "Interactive sessions focusing on real-world clinical challenges in Nephrology and kidney health.",
  },
  {
    icon: Monitor,
    title: "Bridging Science & Practice",
    description:
      "Bridging the gap between latest innovations and daily clinical practice for better patient outcomes.",
  },
  {
    icon: Award,
    title: "Expert Regional & National Faculty",
    description:
      "A curated mix of distinguished veterans and promising early-career nephrologists from across India.",
  },
];

/**
 * Quick overview facts about the conference.
 */
export const overviewItems: OverviewItem[] = [
  {
    icon: Clock,
    title: "Duration",
    description: "3-day comprehensive academic conference",
  },
  {
    icon: Users,
    title: "Expected Attendance",
    description: "Nephrology professionals, researchers, and trainees",
  },
];

/**
 * Important links and resources for attendees.
 */
export const resourceItems: ResourceItem[] = [
  {
    icon: Phone,
    title: "Contact Us",
    description: "Reach out to the organizing committee for any queries.",
    href: "/contact",
    linkText: "Contact Info",
  },
  {
    icon: FileText,
    title: "Abstract Guidelines",
    description:
      "Submit your nephrology research and case studies for presentation.",
    href: "/abstract-guidelines",
    linkText: "View Guidelines",
  },
  {
    icon: Calendar,
    title: "Scientific Program",
    description:
      "View the complete conference schedule with session details and speakers.",
    href: "/scientific-program",
    linkText: "View Program",
  },
  {
    icon: Download,
    title: "Conference Brochure",
    description:
      "Download the full brochure with event details and program schedule.",
    href: "/files/isn-nz-2026-brochure.pdf",
    linkText: "Download PDF",
    isExternal: true,
  },
];

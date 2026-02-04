import {
  Stethoscope,
  Heart,
  TestTube,
  Users,
  FlaskConical,
  BookOpen,
} from "lucide-react";

export const conferenceHighlightsData = [
  {
    title: "Clinical Case Discussions",
    description:
      "Engage in interactive case discussions covering complex nephrology cases including AKI, CKD management, and glomerular diseases with renowned faculty.",
    icon: <Stethoscope size={24} strokeWidth={1.5} />,
  },
  {
    title: "Dialysis & Transplant Sessions",
    description:
      "Learn about latest advances in hemodialysis, peritoneal dialysis, and kidney transplantation from leading experts in the field.",
    icon: <Heart size={24} strokeWidth={1.5} />,
  },
  {
    title: "Glomerular Disease Updates",
    description:
      "Explore diagnostic approaches to glomerulonephritis, nephrotic syndrome management, and IgA nephropathy with practical clinical insights.",
    icon: <TestTube size={24} strokeWidth={1.5} />,
  },
  {
    title: "Pediatric Nephrology Focus",
    description:
      "Master the management of childhood kidney diseases, congenital anomalies, and pediatric dialysis considerations.",
    icon: <Users size={24} strokeWidth={1.5} />,
  },
  {
    title: "Research & Innovation",
    description:
      "Gain insights into cutting-edge nephrology research, biomarkers, and emerging therapeutic targets in kidney disease.",
    icon: <FlaskConical size={24} strokeWidth={1.5} />,
  },
  {
    title: "Clinical Practice Guidelines",
    description:
      "Updates on evidence-based guidelines for hypertension, diabetic kidney disease, and electrolyte disorders management.",
    icon: <BookOpen size={24} strokeWidth={1.5} />,
  },
];

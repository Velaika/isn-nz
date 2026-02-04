import { SurgicalFeatureProps } from "../types";
import { Globe, Microscope, Heart, Brain, Cpu, Building } from "lucide-react";

export const surgicalFeaturesData: (SurgicalFeatureProps & {
  index: number;
})[] = [
    {
      icon: Microscope,
      title: "Clinical Nephrology",
      description:
        "Expert sessions on glomerular diseases, AKD and CKD management, hypertension updates, and electrolyte imbalances with interactive case-based learning.",
      index: 0,
    },
    {
      icon: Cpu,
      title: "Dialysis Innovations",
      description:
        "Comprehensive coverage of hemodialysis innovations, peritoneal dialysis trends, CRRT in ICU settings, and advanced home dialysis programs.",
      index: 1,
    },
    {
      icon: Heart,
      title: "Kidney Transplantation",
      description:
        "In-depth discussions on donor optimization, immunosuppression protocols, post-transplant complications, and living donor program management.",
      index: 2,
    },
    {
      icon: Brain,
      title: "Critical Care Nephrology",
      description:
        "Focusing on the management of acute kidney injury in the ICU, fluid management strategies, and extracorporeal organ support therapies.",
      index: 3,
    },
    {
      icon: Globe,
      title: "Specialized Care",
      description:
        "Diverse topics including pediatric nephrology, onco-nephrology, geriatric kidney care, and management of genetic kidney diseases.",
      index: 4,
    },
    {
      icon: Building,
      title: "Case-Based Discussions",
      description:
        "Hands-on participative approach to complex clinical cases in nephrology, led by a mix of veteran experts and promising early-career nephrologists.",
      index: 5,
    },
  ];

import {
  FormatRequirement,
  Guideline,
  SubmissionCategory,
} from "@/types/information";
import {
  BookOpen,
  CheckCircle,
  Users,
  Calendar,
  Award,
  FileText,
  Mail,
} from "lucide-react";

export const ABSTRACT_SUBMISSION_FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSck6rmfSKDY47bUXlyC64d_74YUMUDS5Tew1pJFyw__5gJINA/viewform";
export const GUIDELINES_DOC_PATH = "/files/isn-nz-brochure.pdf";
export const BACKGROUND_VIDEO_PATH = "/videos/abstract-page.mp4";

/**
 * Categories for abstract submissions.
 */
export const submissionCategories: SubmissionCategory[] = [
  {
    title: "Original Study",
    icon: BookOpen,
    description:
      "Submit original research in nephrology with introduction, materials and methods, results, and conclusion.",
  },
  {
    title: "Case Report",
    icon: FileText,
    description:
      "Present interesting nephrological case studies with introduction, case presentation, and conclusion.",
  },
];

/**
 * Formatting requirements for abstracts.
 */
export const formatRequirements: FormatRequirement[] = [
  {
    element: "Type of Study",
    requirement: "Specify Original Study or Case Report",
    example:
      "Type of the study- original study OR Type of the study- case report",
  },
  {
    element: "Title",
    requirement: "Bold format",
    example: "Title (in bold)",
  },
  {
    element: "Authors",
    requirement:
      "Last name, followed by middle name and first name. Underline presenting author and provide email address.",
    example: (
      <span>
        Name of the authors (write the last name, followed by middle name and
        then first name). Identify the presenting author by{" "}
        <u className="underline decoration-primary/50 underline-offset-2">
          underline
        </u>
        . Also provide the email address of the presenting author.
      </span>
    ),
  },
  {
    element: "Affiliation",
    requirement: "Institution name and location",
    example: "Affiliation - mention institution name",
  },
  {
    element: "Original Study Structure",
    requirement:
      "Must include: Introduction, Materials and methods, Results, Conclusion",
    example:
      "Introduction: [background], Materials and methods: [methodology], Results: [findings], Conclusion: [summary]",
  },
  {
    element: "Case Report Structure",
    requirement: "Must include: Introduction, Case presentation, Conclusion",
    example:
      "Introduction: [background], Case presentation: [case details], Conclusion: [summary]",
  },
  {
    element: "Keywords",
    requirement: "Provide 3-5 keywords, separated by semicolon (;)",
    example:
      "Key words: nephrology; dialysis; kidney transplant; clinical case; research",
  },
  {
    element: "Word Limit",
    requirement: "Maximum 250 words for abstract body",
    example: "The body of abstract shouldn't be more than 250 words.",
  },
];

/**
 * General submission guidelines.
 */
export const guidelines: Guideline[] = [
  {
    icon: Mail,
    text: "Abstracts must be submitted ONLY through the Form provided on this website. Email/fax or any other means will NOT be accepted.",
    colorClassName: "text-primary",
  },
  {
    icon: FileText,
    text: "The body of abstract shouldn't be more than 250 words.",
    colorClassName: "text-green-500",
  },
  {
    icon: Calendar,
    text: "Last date for abstract submission: 1st March, 2026",
    colorClassName: "text-amber-500",
  },
  {
    icon: Users,
    text: "After submitting your abstract, the presenting author MUST register for the conference through the Registration page.",
    colorClassName: "text-blue-500",
  },
  {
    icon: CheckCircle,
    text: "Title of the abstract, authors, affiliation, and name of the institute must be mentioned at the top. For original studies, the body of abstract should comprise of introduction, material and methods, results and conclusion. For case reports, abstract should be prepared under the following headings: Introduction, case presentation and conclusion.",
    colorClassName: "text-green-500",
  },
  {
    icon: BookOpen,
    text: "The submitted abstracts will be reviewed by the scientific committee. The review process is confidential, and the committee's decision is final.",
    colorClassName: "text-gray-700",
  },
  {
    icon: Award,
    text: "Certificate of presentation will be awarded to the presenting author only.",
    colorClassName: "text-purple-500",
  },
];

// Submission process description
export const SUBMISSION_PROCESS_STEPS = [
  {
    step: 1,
    title: "Submit Your Abstract",
    description:
      "Complete the Form with your abstract details following the guidelines provided.",
  },
  {
    step: 2,
    title: "Register for Conference",
    description:
      "After abstract submission, proceed to the Registration page to complete your conference registration.",
  },
  {
    step: 3,
    title: "Await Review",
    description:
      "Your abstract will be reviewed by the scientific committee. Results will be communicated via email.",
  },
];

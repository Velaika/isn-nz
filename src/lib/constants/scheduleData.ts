export interface ScheduleSession {
  time: string;
  title: string;
  speaker?: string;
  chairperson?: string;
  additionalSpeakers?: string[];
  type?:
  | "inauguration"
  | "session"
  | "slide-seminar"
  | "lunch"
  | "tea-break"
  | "poster-review";
}

export interface DaySchedule {
  day: string;
  date: string;
  sessions: ScheduleSession[];
}

export const conferenceSchedule: DaySchedule[] = [
  {
    day: "DAY 1",
    date: "April 10th 2026 - Friday",
    sessions: [
      {
        time: "8:00-9:00 AM",
        title: "INAUGURATION",
        type: "inauguration",
      },
      {
        time: "9:00-10:00 AM",
        title: "Keynote Address: Future of Nephrology",
        speaker: "TBA",
        type: "session",
      },
      {
        time: "10:00-11:00 AM",
        title: "Session 1: Glomerular Diseases",
        type: "session",
      },
      {
        time: "11:00-11:30 AM",
        title: "TEA BREAK",
        type: "tea-break",
      },
      {
        time: "11:30 AM-1:00 PM",
        title: "Session 2: Dialysis Innovations",
        type: "session",
      },
      {
        time: "1:00-2:00 PM",
        title: "LUNCH",
        type: "lunch",
      },
      {
        time: "2:00-4:00 PM",
        title: "Workshop: Interventional Nephrology",
        type: "session",
      },
      {
        time: "4:00-5:00 PM",
        title: "Poster Presentation",
        type: "poster-review",
      },
    ],
  },
  {
    day: "DAY 2",
    date: "April 11th 2026 - Saturday",
    sessions: [
      {
        time: "9:00-10:30 AM",
        title: "Session 3: Kidney Transplantation",
        type: "session",
      },
      {
        time: "10:30-11:00 AM",
        title: "TEA BREAK",
        type: "tea-break",
      },
      {
        time: "11:00 AM-12:30 PM",
        title: "Session 4: Hypertension Management",
        type: "session",
      },
      {
        time: "12:30-1:30 PM",
        title: "LUNCH",
        type: "lunch",
      },
      {
        time: "1:30-3:30 PM",
        title: "Case-Based Discussion: Critical Care Nephrology",
        type: "slide-seminar",
      },
      {
        time: "3:30-5:00 PM",
        title: "Scientific Research Presentations",
        type: "session",
      },
    ],
  },
  {
    day: "DAY 3",
    date: "April 12th 2026 - Sunday",
    sessions: [
      {
        time: "9:00-10:30 AM",
        title: "Session 5: Pediatric Nephrology",
        type: "session",
      },
      {
        time: "10:30-11:00 AM",
        title: "TEA BREAK",
        type: "tea-break",
      },
      {
        time: "11:00 AM-12:00 PM",
        title: "Panel Discussion: Ethics in Kidney Care",
        type: "session",
      },
      {
        time: "12:00-1:00 PM",
        title: "Awards and Valedictory Ceremony",
        type: "session",
      },
      {
        time: "1:00 PM",
        title: "FAREWELL LUNCH",
        type: "lunch",
      },
    ],
  },
];

// Key speakers list
export const keynoteSpeakers = [
  { name: "TBA", affiliation: "" },
];

// Session highlights for quick overview
export const sessionHighlights = [
  {
    title: "Clinical Nephrology",
    topics: [
      "Glomerular Diseases",
      "AKD and CKD Management",
      "Hypertension Updates",
      "Electrolyte Imbalances",
    ],
  },
  {
    title: "Dialysis & Extracorporeal Therapies",
    topics: [
      "Hemodialysis Innovations",
      "Peritoneal Dialysis Trends",
      "CRRT in ICU",
      "Home Dialysis Programs",
    ],
  },
  {
    title: "Kidney Transplantation",
    topics: [
      "Donor Optimization",
      "Immunosuppression Protocols",
      "Post-Transplant Complications",
      "Living Donor Programs",
    ],
  },
  {
    title: "Specialized Nephrology",
    topics: [
      "Pediatric Nephrology",
      "Onco-Nephrology",
      "Geriatric Kidney Care",
      "Genetic Kidney Diseases",
    ],
  },
];

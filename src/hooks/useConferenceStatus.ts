import { useState, useMemo, useCallback, useEffect } from "react";
import {
  CONFERENCE_DATE,
  CONFERENCE_END_DATE,
} from "@/lib/constants/conferenceDetails";
import { ConferenceStateType } from "@/types/ui";

/**
 * A custom hook to calculate and track the current status of the conference.
 * Handles countdown, ongoing, and ended states automatically.
 * @returns {ConferenceStateType} The current state of the conference.
 */
export function useConferenceStatus(): ConferenceStateType {
  const conferenceStartTime = useMemo(() => CONFERENCE_DATE.getTime(), []);
  const conferenceEndTime = useMemo(() => CONFERENCE_END_DATE.getTime(), []);

  const [state, setState] = useState<ConferenceStateType>({
    status: "loading",
    timeText: "Loading...",
  });

  const calculateState = useCallback((): ConferenceStateType => {
    const now = Date.now();

    if (now >= conferenceEndTime) {
      return { status: "ended", timeText: "Conference has concluded." };
    }

    if (now >= conferenceStartTime) {
      return { status: "ongoing", timeText: "Conference is happening now!" };
    }

    const diff = conferenceStartTime - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let timeText = `Starts in ${days}d ${hours}h`;
    if (days < 1) timeText = `Starts in ${hours}h`;
    if (hours < 1) timeText = "Starting soon";

    return { status: "countdown", timeText, daysUntilStart: days };
  }, [conferenceStartTime, conferenceEndTime]);

  useEffect(() => {
    // Set initial state client-side to avoid hydration mismatch
    setState(calculateState());

    // Update every minute
    const interval = setInterval(() => setState(calculateState()), 60000);
    return () => clearInterval(interval);
  }, [calculateState]);

  return state;
}

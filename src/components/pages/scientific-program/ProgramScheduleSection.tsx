"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { conferenceSchedule } from "@/lib/constants/scheduleData";
import {
  Calendar,
  Clock,
  User,
  Users,
  Coffee,
  Utensils,
  Presentation,
  Microscope,
} from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const getSessionIcon = (type?: string) => {
  switch (type) {
    case "inauguration":
      return <Presentation className="size-4 text-primary" />;
    case "slide-seminar":
      return <Microscope className="size-4 text-purple-600" />;
    case "tea-break":
      return <Coffee className="size-4 text-amber-600" />;
    case "lunch":
      return <Utensils className="size-4 text-green-600" />;
    case "poster-review":
      return <Presentation className="size-4 text-blue-600" />;
    default:
      return <User className="size-4 text-primary" />;
  }
};

const getSessionBadgeColor = (type?: string) => {
  switch (type) {
    case "inauguration":
      return "bg-primary text-primary-foreground";
    case "slide-seminar":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
    case "tea-break":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
    case "lunch":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
    case "poster-review":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
    case "session":
      return "bg-primary/10 text-primary";
    default:
      return "bg-muted text-muted-foreground";
  }
};

/**
 * Displays the complete conference schedule with day-by-day breakdown.
 */
export const ProgramScheduleSection = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full bg-gradient-to-br from-primary/5 via-transparent to-primary/10 py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Detailed Schedule
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Three days of intensive learning, networking, and professional
            development in nephrology.
          </p>
        </div>

        {/* Day Selection Tabs */}
        <div className="mx-auto mb-8 flex max-w-4xl flex-wrap justify-center gap-4">
          {conferenceSchedule.map((day, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedDay(index)}
              className={`flex items-center gap-2 rounded-lg border-2 px-6 py-3 font-semibold transition-all ${
                selectedDay === index
                  ? "border-primary bg-primary text-primary-foreground shadow-lg"
                  : "border-muted bg-background hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              <Calendar className="size-4" />
              <div className="text-left">
                <div className="text-sm">{day.day}</div>
                <div className="text-xs opacity-80">{day.date}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Schedule Display */}
        <motion.div
          key={selectedDay}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto max-w-6xl"
        >
          <Card className="border-2 py-0">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-3 text-2xl py-6">
                <Calendar className="size-6 text-primary" />
                {conferenceSchedule[selectedDay].day} -{" "}
                {conferenceSchedule[selectedDay].date}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {conferenceSchedule[selectedDay].sessions.map(
                  (session, sessionIndex) => (
                    <motion.div
                      key={sessionIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: sessionIndex * 0.05 }}
                      className={`rounded-lg border p-4 transition-all hover:shadow-md ${
                        session.type === "inauguration"
                          ? "border-primary/30 bg-primary/5"
                          : session.type === "tea-break" ||
                              session.type === "lunch"
                            ? "border-muted bg-muted/30"
                            : "border-border bg-card hover:border-primary/20"
                      }`}
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-start">
                        {/* Time */}
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary md:min-w-[140px]">
                          <Clock className="size-4" />
                          {session.time}
                        </div>

                        {/* Session Details */}
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-wrap items-start gap-2">
                            <h3 className="flex-1 font-semibold text-foreground">
                              {session.title}
                            </h3>
                            {session.type && (
                              <Badge
                                className={`${getSessionBadgeColor(
                                  session.type,
                                )} flex items-center gap-1`}
                              >
                                {getSessionIcon(session.type)}
                                <span className="capitalize">
                                  {session.type.replace("-", " ")}
                                </span>
                              </Badge>
                            )}
                          </div>

                          {session.speaker && (
                            <div className="flex items-start gap-2 text-sm text-muted-foreground">
                              <User className="size-4 mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="font-medium">Speaker: </span>
                                {session.speaker}
                              </div>
                            </div>
                          )}

                          {session.additionalSpeakers &&
                            session.additionalSpeakers.length > 0 && (
                              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Users className="size-4 mt-0.5 flex-shrink-0" />
                                <div>
                                  <span className="font-medium">
                                    Additional Speakers:{" "}
                                  </span>
                                  {session.additionalSpeakers.join(", ")}
                                </div>
                              </div>
                            )}

                          {session.chairperson && (
                            <div className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Users className="size-4 mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="font-medium">
                                  Chairperson:{" "}
                                </span>
                                {session.chairperson}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Legend */}
        <div className="mx-auto mt-8 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Session Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Presentation className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Keynote/Inauguration
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Regular Session
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Microscope className="size-4 text-purple-600" />
                  <span className="text-sm text-muted-foreground">
                    Slide Seminar
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="size-4 text-amber-600" />
                  <span className="text-sm text-muted-foreground">
                    Tea Break
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="size-4 text-green-600" />
                  <span className="text-sm text-muted-foreground">Lunch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Presentation className="size-4 text-blue-600" />
                  <span className="text-sm text-muted-foreground">
                    Poster Review
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

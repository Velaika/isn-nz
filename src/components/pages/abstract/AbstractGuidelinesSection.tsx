"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  Award,
  Sparkles,
  FileText,
  ArrowRight,
  UserCheck,
  ClipboardCheck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  guidelines,
  ABSTRACT_SUBMISSION_FORM_LINK,
  SUBMISSION_PROCESS_STEPS,
} from "@/lib/constants/abstractData";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/**
 * Displays general guidelines and detailed submission instructions in a unified layout.
 */
export const AbstractGuidelinesSection = () => (
  <motion.section
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="w-full bg-gradient-to-bl from-primary/10 via-transparent to-primary/5 py-20 md:py-28"
  >
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Submission Guidelines
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Follow these steps to ensure your abstract is submitted correctly and
          reviewed efficiently.
        </p>
      </div>

      {/* Guidelines and Submission Instructions Layout */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Card 1: General Guidelines */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="size-5 text-primary" />
              General Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {guidelines.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-3">
                  <Icon
                    className={`size-5 mt-1 flex-shrink-0 ${item.colorClassName}`}
                  />
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Right Column: Stipend Banner + Submission Instructions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stipend Highlight Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-orange-500 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6 shadow-xl dark:from-orange-950/30 dark:via-amber-950/30 dark:to-yellow-950/30">
              <div className="absolute -right-8 -top-8 size-32 rounded-full bg-orange-300/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 size-32 rounded-full bg-yellow-300/20 blur-3xl" />

              <div className="relative flex flex-col items-center gap-3 text-center">
                <div className="flex items-center gap-2">
                  <Award className="size-8 text-orange-600 dark:text-orange-400" />
                  <Sparkles className="size-6 text-yellow-600 dark:text-yellow-400" />
                </div>

                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 md:text-2xl">
                  🏆 Best 50 Posters will be offered a Travel Grant of Rs. 5000/
                </h3>

                <p className="text-sm text-orange-800 dark:text-orange-200 md:text-base">
                  An exciting opportunity to have your work recognized and
                  rewarded! The best 50 posters will be offered a Travel Grant
                  of Rs. 5000 each. Additionally, 25 posters judged as best
                  posters in different sections will be given Poster Awards.
                </p>

                <div className="mt-1 flex items-center gap-2 rounded-full bg-orange-600 px-5 py-1.5 text-xs font-semibold text-white shadow-lg">
                  <Award className="size-3" />
                  <span>Submit Your Best Work Today!</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Submission Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="size-5 text-primary" />
                How to Submit Your Abstract
              </CardTitle>
              <CardDescription>
                Abstracts must be submitted ONLY through the Form provided
                below. Email/fax or any other means will NOT be accepted.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Submission Process Steps */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">
                  Submission Process
                </h4>
                {SUBMISSION_PROCESS_STEPS.map((step) => {
                  const StepIcon =
                    step.step === 1
                      ? FileText
                      : step.step === 2
                        ? UserCheck
                        : ClipboardCheck;
                  return (
                    <div
                      key={step.step}
                      className="flex items-start gap-3 rounded-lg border bg-card p-4 transition-all hover:border-primary/20 hover:shadow-sm"
                    >
                      <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <StepIcon className="size-4 text-primary" />
                          <h5 className="font-semibold text-foreground">
                            {step.title}
                          </h5>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Primary CTA - Submit Abstract */}
              <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                <div className="mb-4 text-center">
                  <h4 className="text-lg font-bold text-primary">
                    Ready to Submit?
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Click below to access the official abstract submission form.
                    Make sure you have prepared your abstract according to the
                    guidelines.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    asChild
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <Link
                      href={ABSTRACT_SUBMISSION_FORM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 size-5" />
                      Submit Abstract via Form
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  After submission, don&apos;t forget to register for the
                  conference!
                </p>
              </div>

              {/* Secondary CTA - Registration */}
              <div className="flex flex-col items-start justify-between gap-4 rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 sm:flex-row sm:items-center">
                <div>
                  <h4 className="flex items-center gap-2 font-semibold text-foreground">
                    <UserCheck className="size-5 text-blue-600" />
                    Complete Your Registration
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    The presenting author must register for the conference after
                    abstract submission.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-shrink-0 border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-700"
                >
                  <Link href="/registration">
                    Go to Registration
                    <ArrowRight className="ml-2 size-3" />
                  </Link>
                </Button>
              </div>

              {/* Help Section */}
              <div className="flex flex-col items-start justify-between gap-4 rounded-lg border p-4 sm:flex-row sm:items-center">
                <div>
                  <h4 className="font-semibold text-foreground">
                    Have Questions?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Our organizing team is here to help with any inquiries.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-shrink-0 hover:text-white"
                >
                  <Link href="/contact">
                    Contact Us <Send className="ml-2 size-3" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </motion.section>
);

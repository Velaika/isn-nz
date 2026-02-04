"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Stethoscope, Award, Sparkles } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/**
 * Displays the abstract template structure for both Original Study and Case Report formats.
 */
export const AbstractTemplateSection = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-gradient-to-tr from-primary/5 via-transparent to-primary/10 py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Abstract Template for NZ-ISNCON 2026
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Please read the instructions carefully prior to submitting your
            abstract. Follow the template structure based on your submission
            type.
          </p>
        </div>

        {/* Stipend Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-12 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-8 shadow-xl">
            <div className="absolute -right-8 -top-8 size-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 size-32 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-3">
                <Award className="size-10 text-primary" />
                <Sparkles className="size-8 text-primary/80" />
              </div>

              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                🏆 Best Oral & Poster Presentations Will Be Awarded
              </h3>

              <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                An exciting opportunity to have your research recognized! The top
                presentations will receive awards and recognition from the
                Indian Society of Nephrology - North Zone.
              </p>

              <div className="mt-2 flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground shadow-lg">
                <Award className="size-4" />
                <span>Submit Your Research Today!</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two-column layout for templates */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Original Study Template */}
          <Card className="border-2 border-primary/20">
            <CardHeader className="bg-primary/5">
              <div className="mb-2 flex items-center gap-2">
                <FileText className="size-6 text-primary" />
                <Badge variant="default" className="uppercase">
                  Original Study
                </Badge>
              </div>
              <CardTitle className="text-2xl">Original Study Format</CardTitle>
              <CardDescription>
                Template structure for original research submissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-3">
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Type of the study
                  </p>
                  <p className="mt-1 text-sm">original study</p>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Title
                  </p>
                  <p className="mt-1 text-sm font-bold">(in bold)</p>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Name of the authors
                  </p>
                  <p className="mt-1 text-sm">
                    (write the last name, followed by middle name and then first
                    name)
                  </p>
                  <p className="mt-1 text-sm">
                    Identify the presenting author by{" "}
                    <u className="underline decoration-primary/50 underline-offset-2">
                      underline
                    </u>
                    . Also provide the email address of the presenting author.
                  </p>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Affiliation
                  </p>
                  <p className="mt-1 text-sm">(mention institution name)</p>
                </div>

                <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-4">
                  <p className="font-semibold text-primary">
                    Abstract Body Structure:
                  </p>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>
                      <span className="font-semibold">Introduction:</span>{" "}
                      Background and objectives
                    </li>
                    <li>
                      <span className="font-semibold">
                        Materials and methods:
                      </span>{" "}
                      Study methodology
                    </li>
                    <li>
                      <span className="font-semibold">Results:</span> Key
                      findings and data
                    </li>
                    <li>
                      <span className="font-semibold">Conclusion:</span> Summary
                      and implications
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Key words
                  </p>
                  <p className="mt-1 text-sm">
                    provide 3-5 key words, separated by semicolon (;)
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/10 p-3 text-sm">
                <p className="font-semibold text-amber-900 dark:text-amber-100">
                  Note:
                </p>
                <p className="mt-1 text-amber-800 dark:text-amber-200">
                  Size of the poster will be conveyed soon
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Case Report Template */}
          <Card className="border-2 border-primary/20">
            <CardHeader className="bg-primary/5">
              <div className="mb-2 flex items-center gap-2">
                <Stethoscope className="size-6 text-primary" />
                <Badge variant="default" className="uppercase">
                  Case Report
                </Badge>
              </div>
              <CardTitle className="text-2xl">Case Report Format</CardTitle>
              <CardDescription>
                Template structure for case report submissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-3">
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Type of the study
                  </p>
                  <p className="mt-1 text-sm">case report</p>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Title
                  </p>
                  <p className="mt-1 text-sm font-bold">(in bold)</p>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Name of the authors
                  </p>
                  <p className="mt-1 text-sm">
                    (write the last name, followed by middle name and then first
                    name)
                  </p>
                  <p className="mt-1 text-sm">
                    Identify the presenting author by{" "}
                    <u className="underline decoration-primary/50 underline-offset-2">
                      underline
                    </u>
                    . Also provide the email address of the presenting author.
                  </p>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Affiliation
                  </p>
                  <p className="mt-1 text-sm">(mention institution name)</p>
                </div>

                <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-4">
                  <p className="font-semibold text-primary">
                    Abstract Body Structure:
                  </p>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>
                      <span className="font-semibold">Introduction:</span>{" "}
                      Background and context
                    </li>
                    <li>
                      <span className="font-semibold">Case presentation:</span>{" "}
                      Detailed case description
                    </li>
                    <li>
                      <span className="font-semibold">Conclusion:</span> Summary
                      and learning points
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Key words
                  </p>
                  <p className="mt-1 text-sm">
                    provide 3-5 key words, separated by semicolon (;)
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/10 p-3 text-sm">
                <p className="font-semibold text-amber-900 dark:text-amber-100">
                  Note:
                </p>
                <p className="mt-1 text-amber-800 dark:text-amber-200">
                  Size of the poster will be conveyed soon
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-8 max-w-4xl rounded-lg border border-primary/20 bg-primary/5 p-6"
        >
          <h4 className="mb-3 text-lg font-semibold text-primary">
            Important Instructions:
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-primary">•</span>
              <span>
                Abstracts must be submitted ONLY through the Form provided on
                this website. Email/fax or any other means will NOT be accepted.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-primary">•</span>
              <span>
                The body of abstract shouldn&apos;t be more than 250 words.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-primary">•</span>
              <span>
                Last date for abstract submission: 1st March, 2026
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-primary">•</span>
              <span>
                After submitting your abstract, the presenting author MUST
                register for the conference through the Registration page.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

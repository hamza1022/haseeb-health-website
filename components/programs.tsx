"use client";

import { motion } from "framer-motion";
import { CalendarCheck, FileText, NotebookPen } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const programs = [
  {
    icon: CalendarCheck,
    title: "60-Day Transformation Challenge",
    description: "60 days. One goal. A better you.",
    features: [
      "Structured diet plan",
      "Personalized workout plan",
      "Weekly progress tracking",
      "Coach support & accountability",
    ],
    footnote: "No excuses. No shortcuts. Just 60 days of consistency.",
    cta: "Join the Challenge",
    featured: true,
  },
  {
    icon: NotebookPen,
    title: "Diet + Workout Plan",
    description: "A fully personalized plan built around your goals.",
    features: [
      "Personalized diet plan",
      "Customized workout plan",
      "Ongoing online support",
    ],
    footnote: "DM to get your plan started.",
    cta: "Get Your Plan",
    featured: false,
  },
  {
    icon: FileText,
    title: "Beginner Fat Loss Guide",
    description: "4 simple steps to start losing fat, the right way.",
    features: [
      "Eat smart",
      "Train properly",
      "Recover well",
      "Stay consistent",
    ],
    footnote: "A free starting point before you commit to a full plan.",
    cta: "Get the Guide",
    featured: false,
  },
];

export function Programs() {
  return (
    <section id="programs" className="bg-bg-elevated px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Programs"
          title="Pick Your Starting Point"
          description="Every program leads to the same place: a plan built around you."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`flex h-full flex-col gap-6 rounded-3xl border p-7 ${
                  program.featured
                    ? "border-accent/40 bg-bg-base shadow-[0_0_0_1px_rgba(212,169,74,0.15)]"
                    : "border-white/5 bg-bg-base"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <program.icon size={22} strokeWidth={2} />
                  </span>
                  {program.featured && (
                    <span className="rounded-full bg-ember px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wide text-white">
                      Most Popular
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-primary">
                    {program.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted">
                    {program.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 font-body text-sm text-text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-4">
                  <p className="font-body text-xs italic text-text-muted">
                    {program.footnote}
                  </p>
                  <CtaButton
                    variant={program.featured ? "fill" : "outline"}
                    className="w-full py-3 text-sm"
                  >
                    {program.cta}
                  </CtaButton>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

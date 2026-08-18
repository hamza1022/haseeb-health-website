"use client";

import { motion, type Variants } from "framer-motion";
import { Apple, ChevronRight, Dumbbell, TrendingUp, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  points: string[];
  callout: string;
};

const steps: Step[] = [
  {
    number: "01",
    icon: Apple,
    title: "Nutrition",
    subtitle: "Fat loss starts with your diet.",
    points: [
      "Stay in a calorie deficit",
      "Eat 1.6–2.2g protein per kg of body weight",
      "Choose whole foods most of the time",
      "Reduce sugary drinks and processed foods",
      "Drink 2.5–3.5 liters of water daily",
    ],
    callout: "You don't need a perfect diet, you need a consistent one.",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "Training & Recovery",
    subtitle: "Train hard. Recover harder.",
    points: [
      "Strength train 3–5 days per week",
      "Focus on proper form and progressive overload",
      "Walk 8,000–10,000 steps daily",
      "Add 20–30 minutes of cardio 3–5 times per week",
      "Sleep 7–9 hours every night",
    ],
    callout: "Recovery is where the results actually happen.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Stay Consistent",
    subtitle: "Fat loss is a lifestyle, not a 30-day challenge.",
    points: [
      "Track your bodyweight weekly",
      "Don't expect overnight results",
      "Stay consistent for at least 8–12 weeks",
      "Trust the process and keep improving",
    ],
    callout: "Consistency beats intensity, every time.",
  },
];

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function StepCard({ step, delay }: { step: Step; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group flex h-full flex-col gap-5 rounded-3xl border border-white/5 bg-bg-base p-7 transition-colors duration-300 hover:border-accent/30"
      >
        <div className="flex items-center justify-between">
          <span className="bg-ember bg-clip-text font-display text-5xl font-bold text-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-70">
            {step.number}
          </span>
          <motion.span
            whileHover={{ scale: 1.12, rotate: 8 }}
            transition={{ duration: 0.2 }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent"
          >
            <step.icon size={20} strokeWidth={2} />
          </motion.span>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-primary">
            {step.title}
          </h3>
          <p className="font-body text-sm text-text-muted">{step.subtitle}</p>
        </div>

        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-2.5"
        >
          {step.points.map((point) => (
            <motion.li
              key={point}
              variants={itemVariants}
              className="flex items-start gap-2.5 font-body text-sm text-text-muted"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {point}
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-auto rounded-xl border border-accent/20 bg-accent/5 p-4 transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
          <p className="font-body text-sm font-medium text-accent">{step.callout}</p>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg-elevated px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="The Process"
          title="How It Works"
          description="Three fundamentals every client's plan is built on."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-4">
          <StepCard step={steps[0]} delay={0} />

          <Reveal delay={0.15} className="hidden items-center justify-center md:flex">
            <ChevronRight size={22} className="text-accent/30" />
          </Reveal>

          <StepCard step={steps[1]} delay={0.1} />

          <Reveal delay={0.25} className="hidden items-center justify-center md:flex">
            <ChevronRight size={22} className="text-accent/30" />
          </Reveal>

          <StepCard step={steps[2]} delay={0.2} />
        </div>
      </div>
    </section>
  );
}

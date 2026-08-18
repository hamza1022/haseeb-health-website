"use client";

import Image from "next/image";
import { Award, Dumbbell, Salad, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

const stats = [
  {
    icon: Award,
    label: siteConfig.credential,
    detail: "Nutrition & training certification",
  },
  {
    icon: Dumbbell,
    label: "1-on-1 Coaching",
    detail: "Gym, home, and online training",
  },
  {
    icon: Salad,
    label: "Custom Nutrition",
    detail: "Diet plans built around your life",
  },
  {
    icon: Users,
    label: "Real Accountability",
    detail: "Weekly check-ins, not guesswork",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="About Coach Haseeb"
          title="Coaching Built On Results, Not Guesswork"
        />

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="mx-auto w-full max-w-sm md:mx-0">
            <div className="relative aspect-[560/700] w-full overflow-hidden rounded-3xl border border-accent/20 bg-bg-elevated">
              <Image
                src="/images/about-haseeb.jpg"
                alt={siteConfig.trainerName}
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal>
              <p className="font-body text-lg text-text-muted">
                I&apos;m {siteConfig.trainerName} — a {siteConfig.credential}{" "}
                fat loss, muscle gain, and nutrition coach based in{" "}
                {siteConfig.location}. I believe transformation comes from a
                plan built around your body, your schedule, and your goals —
                not a generic template. Every client gets a customized diet
                and training plan, honest feedback, and someone checking in
                on their progress every week.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-bg-elevated p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <stat.icon size={18} strokeWidth={2} />
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold uppercase tracking-wide text-text-primary">
                        {stat.label}
                      </p>
                      <p className="font-body text-xs text-text-muted">
                        {stat.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

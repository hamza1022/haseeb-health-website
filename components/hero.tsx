"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/site-config";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-start overflow-hidden pt-28 md:items-center md:pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-accent">
              {siteConfig.credential}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="font-display text-5xl font-bold uppercase leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
          >
            Fat Loss, Muscle Gain{" "}
            <span className="bg-ember bg-clip-text text-transparent">
              &amp; Nutrition
            </span>{" "}
            Expert
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="max-w-md font-body text-lg text-text-muted"
          >
            Personalized coaching, structured programs, and real accountability —
            built to get you results you can see and measure. Based in{" "}
            {siteConfig.location}, coaching worldwide online.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <CtaButton platform="whatsapp" variant="fill" className="px-8 py-4 text-base" />
            <CtaButton platform="instagram" variant="outline" className="px-8 py-4 text-base" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[220px] sm:max-w-xs md:max-w-sm"
        >
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-ember opacity-30 blur-[80px]" />
          <div className="relative aspect-[480/980] w-full overflow-hidden rounded-[2rem] border border-accent/20 bg-bg-elevated">
            <Image
              src="/images/hero-haseeb.jpg"
              alt={siteConfig.trainerName}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-base/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-base to-transparent" />
    </section>
  );
}

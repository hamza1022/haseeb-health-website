"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Lightbox } from "@/components/lightbox";

const transformations = [
  {
    src: "/images/transformation-recomp.jpg",
    caption: "Body Recomp — 73kg → 69kg in 3 Months",
  },
  {
    src: "/images/transformation-weightloss-2.jpg",
    caption: "107kg → 97kg",
  },
  {
    src: "/images/transformation-salman-medical.jpg",
    caption: "Muhammad Salman — 1 Month, Real Results",
  },
  {
    src: "/images/transformation-maaz-medical.jpg",
    caption: "Maaz Tariq — Consistency + Plan",
  },
  {
    src: "/images/transformation-weightloss-1.jpg",
    caption: "Client Transformation",
  },
];

export function Transformations() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="transformations" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Proof, Not Promises"
          title="Real Client Transformations"
          description="Every plan is built to produce results you can measure — and see."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
          {transformations.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 3) * 0.08}
              className={i === 0 ? "col-span-2 sm:col-span-1 sm:row-span-2" : ""}
            >
              <motion.button
                type="button"
                onClick={() => setOpenIndex(i)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`group relative h-full w-full cursor-zoom-in overflow-hidden rounded-2xl border border-white/5 bg-bg-elevated ${
                  i === 0 ? "aspect-[3/4] sm:aspect-auto sm:h-full" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-8">
                  <p className="font-body text-xs font-medium text-white sm:text-sm">
                    {item.caption}
                  </p>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox isOpen={openIndex !== null} onClose={() => setOpenIndex(null)}>
        {openIndex !== null && (
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-[70vh] w-[90vw] max-w-2xl sm:w-[80vw]">
              <Image
                src={transformations[openIndex].src}
                alt={transformations[openIndex].caption}
                fill
                sizes="90vw"
                className="rounded-2xl object-contain"
              />
            </div>
            <p className="font-body text-sm text-white/80">
              {transformations[openIndex].caption}
            </p>
          </div>
        )}
      </Lightbox>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { VideoTile } from "@/components/video-tile";
import { Lightbox } from "@/components/lightbox";
import { videos } from "@/lib/videos-config";

const AUTO_ADVANCE_MS = 7000;

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const mdQuery = window.matchMedia("(min-width: 640px) and (max-width: 1023px)");
    const lgQuery = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      if (lgQuery.matches) setItemsPerPage(4);
      else if (mdQuery.matches) setItemsPerPage(3);
      else setItemsPerPage(2);
    };

    update();
    mdQuery.addEventListener("change", update);
    lgQuery.addEventListener("change", update);
    return () => {
      mdQuery.removeEventListener("change", update);
      lgQuery.removeEventListener("change", update);
    };
  }, []);

  return itemsPerPage;
}

function chunk<T>(items: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}

export function VideoShowcase() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [page, setPage] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const itemsPerPage = useItemsPerPage();
  const pages = chunk(videos, itemsPerPage);
  const pageCount = pages.length;

  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const goNext = () => setPage((p) => (p + 1) % pageCount);
  const goPrev = () => setPage((p) => (p - 1 + pageCount) % pageCount);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (isHovering || openIndex !== null) return;

    const interval = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(interval);
  }, [isHovering, openIndex, prefersReducedMotion, pageCount, page]);

  const showNext = () => setOpenIndex((i) => (i === null ? null : (i + 1) % videos.length));
  const showPrev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + videos.length) % videos.length));

  return (
    <section id="videos" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="In The Gym"
          title="Training In Action"
          description="A look at real sessions — form, intensity, and coaching."
        />

        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous videos"
            className="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-bg-base text-accent shadow-lg transition-colors hover:border-accent hover:bg-accent/10 lg:flex"
          >
            <ChevronLeft size={20} />
          </button>

          <Reveal>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {pages.map((pageItems, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="grid w-full shrink-0 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-5"
                  >
                    {pageItems.map((video) => {
                      const globalIndex = videos.indexOf(video);
                      return (
                        <VideoTile
                          key={video.file}
                          src={`/videos/${video.file}`}
                          label={video.label}
                          onExpand={() => setOpenIndex(globalIndex)}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next videos"
            className="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-bg-base text-accent shadow-lg transition-colors hover:border-accent hover:bg-accent/10 lg:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === page ? "w-6 bg-accent" : "w-1.5 bg-accent/20"
              }`}
            />
          ))}
        </div>
      </div>

      <Lightbox isOpen={openIndex !== null} onClose={() => setOpenIndex(null)}>
        {openIndex !== null && (
          <div className="flex flex-col items-center gap-3">
            <div className="relative flex items-center gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous video"
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:flex"
              >
                <ChevronLeft size={20} />
              </button>

              <video
                key={videos[openIndex].file}
                src={`/videos/${videos[openIndex].file}`}
                controls
                autoPlay
                loop
                playsInline
                className="max-h-[75vh] max-w-[80vw] rounded-2xl sm:max-w-[60vw]"
              />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next video"
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:flex"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <p className="font-body text-sm text-white/80">
              {videos[openIndex].label} · {openIndex + 1} / {videos.length}
            </p>
          </div>
        )}
      </Lightbox>
    </section>
  );
}

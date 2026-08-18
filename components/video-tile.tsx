"use client";

import { useEffect, useRef } from "react";
import { Maximize2 } from "lucide-react";

export function VideoTile({
  src,
  label,
  onExpand,
}: {
  src: string;
  label: string;
  onExpand: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const showFirstFrame = () => {
      if (video.currentTime === 0) video.currentTime = 0.1;
    };
    video.addEventListener("loadedmetadata", showFirstFrame);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => {
      video.removeEventListener("loadedmetadata", showFirstFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={onExpand}
      className="group relative aspect-[9/16] w-full shrink-0 cursor-zoom-in overflow-hidden rounded-2xl border border-white/5 bg-bg-elevated"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
        <Maximize2
          size={22}
          className="text-white opacity-0 transition-opacity group-hover:opacity-100"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
        <p className="font-body text-xs font-medium text-white">{label}</p>
      </div>
    </button>
  );
}

"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { CtaButton } from "@/components/cta-button";
import { SocialIconLink } from "@/components/social-icon-link";

export function StickyCta() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > (typeof window !== "undefined" ? window.innerHeight * 0.7 : 500));
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-2 border-t border-white/10 bg-bg-elevated/95 px-4 py-3 backdrop-blur-md md:hidden"
        >
          <CtaButton
            platform="whatsapp"
            variant="fill"
            className="flex-1 py-3 text-sm"
          />
          <SocialIconLink platform="instagram" className="shrink-0" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

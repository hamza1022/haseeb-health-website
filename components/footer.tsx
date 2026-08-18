import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-elevated px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <span className="font-display text-xl font-semibold uppercase tracking-wide text-text-primary">
          Haseeb Health
        </span>
        <p className="max-w-md font-body text-sm text-text-muted">
          {siteConfig.tagline} — {siteConfig.credential}, based in {siteConfig.location}.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaButton platform="whatsapp" variant="fill" />
          <CtaButton platform="instagram" variant="outline" />
        </div>
        <p className="font-body text-xs text-text-muted/70">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/cta-button";
import { SocialIconLink } from "@/components/social-icon-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#transformations", label: "Transformations" },
  { href: "#programs", label: "Programs" },
  { href: "#videos", label: "Videos" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg-base/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#top" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpeg"
            alt={siteConfig.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
            priority
          />
          <span className="hidden font-display text-lg font-semibold uppercase tracking-wide text-text-primary sm:block">
            Haseeb Health
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <SocialIconLink platform="instagram" className="hidden sm:flex" />
          <CtaButton
            platform="whatsapp"
            variant="fill"
            showIcon={false}
            className="hidden px-4 py-2 text-xs sm:inline-flex"
          />
        </div>
      </nav>
    </header>
  );
}

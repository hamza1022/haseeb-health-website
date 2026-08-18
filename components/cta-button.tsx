import type { ComponentPropsWithoutRef } from "react";
import { ctaLabels, ctaUrls, type CtaPlatform } from "@/lib/site-config";
import { InstagramIcon, WhatsappIcon } from "@/components/icons";
import clsx from "clsx";

type CtaButtonProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  variant?: "fill" | "outline";
  platform?: CtaPlatform;
  showIcon?: boolean;
};

export function CtaButton({
  variant = "fill",
  platform = "whatsapp",
  showIcon = true,
  className,
  children,
  ...props
}: CtaButtonProps) {
  const Icon = platform === "whatsapp" ? WhatsappIcon : InstagramIcon;

  return (
    <a
      href={ctaUrls[platform]}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]",
        variant === "fill" &&
          "bg-ember text-white shadow-[0_8px_24px_-8px_rgba(232,68,107,0.6)]",
        variant === "outline" &&
          "border border-accent text-accent hover:bg-accent/10",
        className,
      )}
      {...props}
    >
      {showIcon && <Icon size={16} />}
      {children ?? ctaLabels[platform]}
    </a>
  );
}

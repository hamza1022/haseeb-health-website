import { ctaUrls, type CtaPlatform } from "@/lib/site-config";
import { InstagramIcon, WhatsappIcon } from "@/components/icons";
import clsx from "clsx";

export function SocialIconLink({
  platform,
  className,
}: {
  platform: CtaPlatform;
  className?: string;
}) {
  const Icon = platform === "whatsapp" ? WhatsappIcon : InstagramIcon;
  const label = platform === "whatsapp" ? "Message on WhatsApp" : "Follow on Instagram";

  return (
    <a
      href={ctaUrls[platform]}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={clsx(
        "flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 text-accent transition-colors hover:border-accent hover:bg-accent/10",
        className,
      )}
    >
      <Icon size={16} />
    </a>
  );
}

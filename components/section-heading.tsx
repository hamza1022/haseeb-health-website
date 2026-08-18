import { Reveal } from "@/components/reveal";
import clsx from "clsx";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={clsx(
        "mx-auto mb-14 flex max-w-2xl flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {kicker}
      </span>
      <h2 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-text-primary sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="font-body text-base text-text-muted sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}

import { Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/testimonials-config";

export function Testimonials() {
  return (
    <section className="bg-bg-elevated px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Client Results"
          title="What Clients Are Saying"
          description="Real clients — full reviews coming soon."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {testimonials.map((client, i) => (
            <Reveal key={client.name} delay={(i % 5) * 0.06}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/5 bg-bg-base p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-semibold text-accent">
                    {client.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-wide text-text-primary">
                      {client.name}
                    </p>
                    <p className="font-body text-xs text-text-muted">
                      {client.role ?? "Client"}
                    </p>
                  </div>
                </div>
                <Quote size={18} strokeWidth={2} className="text-accent/40" />
                <p className="font-body text-sm italic text-text-muted/70">
                  {client.quote}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

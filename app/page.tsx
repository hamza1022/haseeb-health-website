import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { HowItWorks } from "@/components/how-it-works";
import { Transformations } from "@/components/transformations";
import { Programs } from "@/components/programs";
import { VideoShowcase } from "@/components/video-showcase";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowItWorks />
      <Transformations />
      <Programs />
      <VideoShowcase />
      <Testimonials />
    </main>
  );
}

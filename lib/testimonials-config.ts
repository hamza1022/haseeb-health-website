// Client testimonials.
//
// HOW TO EDIT:
// - The "quote" lines below are TEST/PLACEHOLDER data — generic filler text,
//   not real things these clients said. Swap every one of them for an
//   actual quote from that client before this goes live.
// - "role" is optional context shown under the name (e.g. "60-Day Challenge",
//   "Online Coaching") — edit or remove per person.
// - Add a "photo" path (e.g. "/images/testimonials/hamza.jpg") once real
//   client photos are available — until then an initials avatar is used.

export type TestimonialEntry = {
  name: string;
  role?: string;
  quote: string;
  photo?: string;
};

export const testimonials: TestimonialEntry[] = [
  { name: "Hamza", quote: "Best coaching experience I've had, hands down." },
  { name: "Khizer", quote: "Finally a plan that actually fit my schedule." },
  { name: "Salman", quote: "Real results, real accountability every week." },
  { name: "Arif", quote: "Changed how I think about food and training." },
  { name: "Shamas", quote: "Structured, simple, and it just worked." },
  { name: "Maaz", quote: "Stronger and leaner than I've ever been." },
  { name: "Zubair", quote: "Coach actually checks in — that made the difference." },
  { name: "Talha", quote: "Worth every rupee, would recommend to anyone." },
  { name: "Husnain", quote: "No fluff, just a plan that delivers results." },
  { name: "Huzaifa", quote: "Best decision I made for my health this year." },
];

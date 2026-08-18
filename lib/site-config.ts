const whatsappNumber = "923095005724";
const whatsappMessage = "Hi Haseeb, I'd like to know more about your coaching plans.";

export const siteConfig = {
  name: "Haseeb Health",
  trainerName: "Haseeb Ahmad",
  instagramHandle: "haseeb_health_1",
  instagramUrl: "https://instagram.com/haseeb_health_1",
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  location: "Lahore",
  tagline: "Fat Loss, Muscle Gain & Nutrition Expert",
  credential: "CPD UK Certified",
};

export type CtaPlatform = "whatsapp" | "instagram";

export const ctaLabels: Record<CtaPlatform, string> = {
  whatsapp: "Message on WhatsApp",
  instagram: "Message on Instagram",
};

export const ctaUrls: Record<CtaPlatform, string> = {
  whatsapp: siteConfig.whatsappUrl,
  instagram: siteConfig.instagramUrl,
};

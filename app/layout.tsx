import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MotionProvider } from "@/components/motion-provider";
import { Navbar } from "@/components/navbar";
import { StickyCta } from "@/components/sticky-cta";
import { Footer } from "@/components/footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Haseeb Health — Fat Loss, Muscle Gain & Nutrition Coaching",
  description:
    "CPD UK Certified fitness coach in Lahore. Personalized fat loss, muscle gain, and nutrition coaching. Message on WhatsApp to get started.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${manrope.variable} bg-bg-base font-body text-text-primary antialiased`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <MotionProvider>
            <Navbar />
            {children}
            <Footer />
            <StickyCta />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

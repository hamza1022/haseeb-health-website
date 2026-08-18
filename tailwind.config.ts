import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "var(--bg-base)",
        "bg-elevated": "var(--bg-elevated)",
        accent: "var(--accent)",
        "accent-warm": "var(--accent-warm)",
        "ember-start": "var(--ember-start)",
        "ember-end": "var(--ember-end)",
        "text-primary": "var(--text-primary)",
        "text-muted": "var(--text-muted)",
      },
      backgroundImage: {
        ember: "linear-gradient(135deg, var(--ember-start), var(--ember-end))",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

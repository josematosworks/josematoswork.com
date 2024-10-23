import defaultTheme from "tailwindcss/defaultTheme";
import typographyPlugin from "@tailwindcss/typography";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--jmw-color-primary)",
        secondary: "var(--jmw-color-secondary)",
        accent: "var(--jmw-color-accent)",
        default: "var(--jmw-color-text-default)",
        muted: "var(--jmw-color-text-muted)",
      },
      fontFamily: {
        sans: [
          "var(--jmw-font-sans, ui-sans-serif)",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          "var(--jmw-font-serif, ui-serif)",
          ...defaultTheme.fontFamily.serif,
        ],
        heading: [
          "var(--jmw-font-heading, ui-sans-serif)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: "class",
};

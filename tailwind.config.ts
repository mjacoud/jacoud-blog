import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        'inter':"var(--font-inter)",
        'roboto-bold':"var(--font-roboto-bold)",
        'roboto-regular':"var(--font-roboto-regular)"
      }
    },
  },
  plugins: [],
};
export default config;

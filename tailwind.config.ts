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
      },
      keyframes:{
        "slide-in-right": {
          "0%": {
              visibility: "visible",
              transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
              transform: "translate3d(0, 0, 0)",
          }},
          "slide-out-up": {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "100%": {
                        visibility: "hidden",
                        transform: "translate3d(0, -100%, 0)",
                    },
                },
      },
      animation:{
        slideinright: 'slide-in-right 1s ease-in-out 0.25s 1',
        slideoutup: 'slide-out-up 1s ease-in-out 0.25s 1',
      }
    },
  },
  plugins: [],
};
export default config;

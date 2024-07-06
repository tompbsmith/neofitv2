import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'large-background': "url('/background 3.png')",
        'title-blue': "url('/title-blue.png')",
        'title-white': "url('/title-white.png')",
        'title-end-blue': "url('/title-end-blue.png')",
        'title-end-white': "url('/title-end-white.png')",
      },
      fontFamily: {
        'merriweatherSans': ['var(--font-merriweathersans)'],
        'merriweather': ['var(--font-merriweather)'],
        'roboto': ["Roboto"],
      },
      colors: {
        'table-light-grey': '#F0F1F2',
        'lightest-grey': '#DFDFDF',
        'light-blue': '#417ABD',
        'lighter-blue': '#6B96C8',
        'lightest-blue': '#87A9D0',
        'mid-blue': '#4157A3',
        'dark-blue': '#4158A4',
        'grey': '#585858',
        'footer-blue': '#4F7AB9'
      },
      maxWidth: {
        '8xl': '1440px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: "class"
};
export default config;

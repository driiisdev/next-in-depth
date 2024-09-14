import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      'xl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'md': {'max': '900px'},
      // => @media (max-width: 900px) { ... }

      'base': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'sm': {'max': '412px'},
      // => @media (max-width: 412px) { ... }

      'xs': {'max': '356px'},
      // => @media (max-width: 356px) { ... }
    },
  },
  plugins: [],
};
export default config;

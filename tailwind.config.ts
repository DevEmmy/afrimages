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
        green400: "#62B66F",
        green500: "#A9DCB3",
        green700: "#53B968",
        green800: "#459A56",
        green1000: "#295C34",
        green1100: "#1B3D22",

        orange400: "#FBE4D9",
        orange700: "#EB7A45",
        orange800: "#E76020",
        orange900: "#C0501A",

        grey100: "#FAF9F8",
        grey500: "#BDB4AD",
        grey600: "#7D736C",
        grey900: "#292421",

        success: "#0E8A1A",
        offWhite: "#F9F9F9",

        primary: "#1A202C", // Dark charcoal/slate
        secondary: "#E85D34", // Terracotta/Orange accent
        "charcoal-dark": "#121212",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "glass-bg": "rgba(255, 255, 255, 0.05)",
        "background-light": "#FAFAFA",
        "surface-light": "#FFFFFF",
        "text-light": "#1F2937",
        "muted-light": "#6B7280",
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        'xl': "1rem",
        '2xl': "1.5rem",
        '3xl': "2rem",
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(0, 0, 0, 0.03)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

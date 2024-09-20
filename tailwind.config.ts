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
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

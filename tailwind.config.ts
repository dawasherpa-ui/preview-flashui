import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        grid: "grid 15s linear infinite",
      },
      keyframes: {
          fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
      },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      colors: {
        // #E40201 // red
        primary: {
          // "50": "#fcf6f0",
          // "100": "#fcefe3",
          // "200": "#f7d1ba",
          // "300": "#f5b093",
          // "400": "#eb5f46",
          // "500": "#e40201",
          // "600": "#cc0000",
          // "700": "#ab0000",
          // "800": "#870000",
          // "900": "#660000",
          // "950": "#420000",

          "50": "#fff8f2",
          "100": "#fff1e6",
          "200": "#ffd8bf",
          "300": "#ffb899",
          "400": "#ff674d",
          "500": "#ff0100",
          "600": "#e60000",
          "700": "#bf0000",
          "800": "#990000",
          "900": "#730000",
          "950": "#4a0000",
        },

        // #151515 // black
        secondary: {
          "50": "#f2f2f2",
          "100": "#e8e8e8",
          "200": "#c4c4c4",
          "300": "#a1a1a1",
          "400": "#5c5c5c",
          "500": "#151515",
          "600": "#121010",
          "700": "#0f0b0b",
          "800": "#0d0808",
          "900": "#0a0505",
          "950": "#050101",
        },

        // text
        accent: {
          50: "#f7f7f7",
          100: "#eceded",
          200: "#d8d9d9",
          300: "#c7c9c9",
          400: "#acaeae",
          500: "#979a9a",
          600: "#878989",
          700: "#797c7c",
          800: "#666767",
          900: "#535555",
          950: "#353636",
        },
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;

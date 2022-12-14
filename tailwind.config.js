/** @type {import('tailwindcss').Config} */
const defalutFont = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      sm: "320px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defalutFont.fontFamily.sans],
        mono: [...defalutFont.fontFamily.mono],
      },
      fontSize: {
        "sm-15": "0.9375rem", //15px
        dxs: ["1.5rem", { lineHeight: "2rem" }],
        dsm: ["1.875rem", { lineHeight: "2.375rem" }],
        dmd: ["2.25rem", { lineHeight: "2.75rem" }],
        dlg: ["3rem", { lineHeight: "3.75rem" }],
        dxl: ["3.75rem", { lineHeight: "4.5rem" }],
        d2xl: ["4.5rem", { lineHeight: "5.625rem" }],
      },
      colors: {
        "z-pry":{
          DEFAULT: '#53B1FD',
          25: "#F5FAFF",
          50: "#EFF8FF",
          100: "#D1E9FF",
          200: "#B2DDFF",
          300: "#84CAFF",
          500: "#2E90FA",
          600: "#1570EF",
          700: "#175CD3",
          800: "#1849A9",
          900: "#194185",
        },
        "zuri-gray": {
          DEFAULT: "#98A2B3",
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        "zuri-white": "#ffffff",
      },
    },
  },
  plugins: [],
};

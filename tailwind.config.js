/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        prmColor: "#111826",
        scndColor: "#03A688",
        accntColor: "#04D9B2",
      },
      screens: {
        "m-s": "320px",
        "m-m": "375px",
        "m-l": "425px",
        t: "768px",
        "l-s": "1024px",
        "l-l": "1440px",
      },
      fontFamily: {
        main: ["var(--font-inter)"],
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(8%)" },
          "100%": { transform: "translateY(-8%)" },
        },
      },
      animation: {
        float: "float 2s infinite ease-in-out alternate",
      },
    },
  },
  prefix: "tw-",
  important: true,
  plugins: [require("tailwind-scrollbar")],
};

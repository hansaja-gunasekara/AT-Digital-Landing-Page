/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1200px",
      // => @media (min-width: 1200px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        "primary-color": "#6B3CC9",
        "secondary-color": "#F28D35",
        "analogous-color-1": "#6A44F2",
        "analogous-color-2": "#1CBDDD",
        "triadic-color-1": "#52378C",
        "dark-color": "#78BF91",
        "text-color": "#2F2F2F",
        "text-color-light": "#545A75",
        "text-color-subtle": "#9C9991",
        "accent-color": "#E2F2FE",
        "accent-color-2": "#FFF8E0",
        "error-color": "#FF0335",
        "success-color": "#5EB30B",
      },
    },
  },
  plugins: [],
};


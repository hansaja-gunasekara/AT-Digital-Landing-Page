/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 375px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
}


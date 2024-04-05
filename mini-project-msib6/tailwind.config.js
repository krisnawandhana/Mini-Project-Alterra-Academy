/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary500: "#E8A6B7",
      primary700: "#A75379",
      fontBlack: "#464646",
    },
    screens: {
      // sm: "640px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 960px) { ... }

      lg: "1280px",
      // => @media (min-width: 1440px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "64px",
        lg: "88px",
      },
    }
  },
  plugins: [require("daisyui")],
}


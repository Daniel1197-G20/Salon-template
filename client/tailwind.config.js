/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#EEEBDA",
        clay: "#5A5F8C",
        espresso: "#282B4A",
        blush: "#9DA3C7",
        rose: "#3D4373",
        stone: "#E2DFC7",
        ink: "#191B2F",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        script: ["'Playfair Display'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
      borderRadius: {
        blob: "50% 50% 45% 55% / 55% 45% 55% 45%",
      },
    },
  },
  plugins: [],
}

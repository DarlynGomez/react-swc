/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-50": "#A3718E",
        "purple-70": "#835368",
        "white-100": "#FFFFFF",
        "pink-100": "#e7609a",
        "rgb-red": "#F06D67",
        "rgb-orange": "#FFBC7D",
        "rgb-yellow": "#F0DCB2",
        "rgb-green": "#7EAC8B",
        "rgb-blue-70": "#697BA7",
        "rgb-purple": "#A3718E",
        "rgb-blue-50": "#A5B5DE",
        "black-100": "#1F1E1E",
        "grey-100": "#D7D7D7",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/homedog.png,jpg')",
      }),
      fontFamily: {
        cursive: ["Comforter Brush", "cursive"],
        glacial: ["Teachers", "sans-serif"],
      },
      content: {
        evolvetest: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbsstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};

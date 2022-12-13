const colors = require("tailwindcss/colors");
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
    fontWeight: {
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
    },
    colors: {
      cyan: colors.cyan,
      light: "#F3F4F6",
      light2: "#F9FAFB",
      light3: "#F9FAFB",
      light4: "#FFFFFF",
      med: "#ADB5BD",
      dark4: "#242D3C",
      dark3: "#111827",
      dark2: "#0D1420",
      dark: "#0A0F19",
      primary: "#0974f1",
      free: "#47A431",
      warning: "#FFBD0C",
      critical: "#DD5353",
      yellow: "#fcbf49",
    },
    fontSize: {
      headline1: "96px",
      headline2: "61px",
      headline3: "49px",
      headline4: "35px",
      headline5: "24px",
      headline6: "18px",
      subtitile1: "16px",
      subtitle2: "14px",
      body1: "16px",
      body2: "14px",
      btn: "14px",
      caption: "12px",
    },
  },
  plugins: [require("flowbite/plugin")],
};

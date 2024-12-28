/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: "#FFB9B9",
        softPink: "#FFE3E3",
        vividPink: "#FF0059",
        softPurple: "#C9CDF9",
        darkPurple: "#4920AF",
        softBlue: "#DAE4F8",
        darkBlue: "#0F43AC",
        beige: "#F3E4D7",
        darkBeige: "#E0CCBC",
        chocolateBrown: "#4A0707",
        darkBrown: "#504032",
        softEmerald: "#CFEEE0",
        darkEmerald: "#139476"
      }
    },
  },
  plugins: [],
}


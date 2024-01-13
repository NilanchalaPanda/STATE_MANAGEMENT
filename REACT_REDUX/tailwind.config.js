/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#213547",
        secondary: "#646cff",
        secondaryhover: "#535bf2",
        tertiary: "#242424"
      },
    },
  },
  plugins: [],
}

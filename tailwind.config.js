/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#ffffff',
        "muted": '#ababab',
        "primaryBg": "#0e1317",
        "lightBg": "#151920",
        "darkBg": "#080c0e",
        "btnBg": "#c59d5f",
      }
    },
  },
  plugins: [],
}


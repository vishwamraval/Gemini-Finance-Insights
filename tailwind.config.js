/** @type {import('tailwindcss').Config} */
const app_colors = require('./src/constants/colors.ts');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: app_colors.primary,
        secondary: app_colors.secondary,
        accent: app_colors.accent,
        accent_light: app_colors.accent_light,

        // text colors
        text_primary: app_colors.text_primary,
      }

    },
  },
  plugins: [],
}


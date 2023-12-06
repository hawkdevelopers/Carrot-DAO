import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: "#f97316",
          secondary: "#fed7aa",
          background:"#ffff",
          success: "#FF6363"
        }
      },
      dark: {
        colors: {
          primary: "#FFD34E",
          secondary: "#EE457E",
          background: "#f0f0"
        }
      },
    },
  })],
}

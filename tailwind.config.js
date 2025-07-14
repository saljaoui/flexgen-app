// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#212121",
        // primary: "#6366f1", // optional: for buttons/links
        // text: "#ffffff",
      },
    },
  },
  plugins: [],
}
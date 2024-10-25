/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
      'air': '820px',
      'laptop': '1440px'
      }
    },
  },
  plugins: [],
};


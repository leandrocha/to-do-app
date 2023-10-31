/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css,tsx,ts,scss}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


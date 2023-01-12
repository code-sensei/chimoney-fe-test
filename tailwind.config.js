/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f87171'
      },
      fontFamily: {
        "main": ['Space Mono', 'monospace']
      },
      fontWeight: {
        "800": ["800"]
      }
    },
  },
  plugins: [],
}

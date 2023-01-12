/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#118ab2',
        'success': '#06d6a0',
        'danger': '#ef476f',
        'warning': '#ffd166',
        'dark': '#073b4c',
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

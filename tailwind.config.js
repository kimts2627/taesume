/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'identity-green': '#00dd99',
        'identity-blue': '#294c7b',
      },
    },
  },
  plugins: [],
};

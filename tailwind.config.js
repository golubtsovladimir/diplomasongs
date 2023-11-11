/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '900px',
      'lg': '1100px',
      '2lg': '1230px',
      'xl': '1400px', 
      '2xl': '1600px',
      '3xl': '1800px',
      '4xl': '2000px',
      '5xl': '2200px',
    },
    extend: {
      gridTemplateColumns: {
        'main': 'repeat(auto-fit, minmax(180px, 1fr))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

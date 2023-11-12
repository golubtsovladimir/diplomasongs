/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '700px',
      'lg': '900px',
      'xl': '1100px',
      '2xl': '1300px',
      '3xl': '1500px',
      '4xl': '1700px',
      '5xl': '1900px',
      '6xl': '2100px'
    },
    extend: {
      gridTemplateColumns: {
        'playlist-mobile': 'repeat(auto-fill, minmax(202px, 1fr))',
        'playlist-tablet': 'repeat(auto-fill, minmax(260px, 1fr))',
        'playlist-laptop': 'repeat(auto-fill, minmax(183px, 1fr))',
        'playlist-desktop': 'repeat(auto-fit, minmax(171px, 1fr))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

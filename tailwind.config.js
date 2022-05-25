module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans JP'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
      },
      colors: {
        asset: {
          white: '#f8f8ff',
          beige: '#F9FBE7',
          orange: '#FFAB40',
          gray: '#757575',
          blue: '#0277BD',
          green: '#00838F',
          purple: '#7986CB',
          red: '#EF5350',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

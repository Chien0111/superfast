/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./element/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Template/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ct-primary': {
          '01': '#23215b',
          '02': '#3599D9',
          '03': '#0474BC',
          '05': 'rgb(30 64 175)',
        },
        'ct-secondary': {
          '01': '#FF6B00',
          '02': '#FFB800',
          '03': '#CC5600',
        },
        'ct-neutral': {
          '01': '#FFFFFF',
          '02': '#DFDFDF',
          '03': '#C4C4C4',
          '04': '#7F7F7F',
          '05': '#333333',
        },
        'ct-solid-blue': {
          '01': '#F7FCFF',
          '02': '#E8F3FF',
        },
        'ct-solid-red': {
          '01': '#FF4545',
          '02': '#D10000',
        },
        'ct-solid-yellow': {
          '01': '#FFE177',
          '02': '#FFF6D6',
        },
        'ct-solid-green': {
          '01': '#499D4E',
        },

        'ct-white': '#FFFFFF',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
    },
  },
  plugins: [],
}

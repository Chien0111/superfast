/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

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
      fontFamily: {
        'nunito': ["Nunito", "sans-serif"]
      },
      colors: {
        'ct-primary': {
          '01': '#23215b',
          '02': '#3599D9',
          '03': '#0057A5',
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
          '03': '#ED2490',
        },
        'ct-solid-yellow': {
          '01': '#FFE177',
          '02': '#FFF6D6',
        },
        'ct-solid-green': {
          '01': '#499D4E',
        },
        'ct-white': '#FFFFFF',
        'ct2-neutral': {
          '01': '#FFFFFF',
          '02': '#E0E0E0',
          '03': '#C4C4C4',
          '04': '#4B5563',
          '05': '#333333',
        },
        'ct2-primary': {
          '01': '#2978F9',
          '02': '#EDF3FC',
        },
        'ct2-semantic': {
          'error': '#E22020',
        },
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        /* text button  */
        '.bodytext-button': {
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '22px',
        },
        '.bodytext-button-mobile': {
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '14px',
          lineHeight: '20px',
        },
        /* text 14px  */
        '.bodytext-14px-regular': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '20px',
        },
        '.bodytext-14px-medium': {
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '21px',
        },

        /* text 16px  */
        '.bodytext-16px-regular': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '22px',
        },
        /* Heading h1 */
        '.heading-h1': {
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '24px',
          lineHeight: '30px',
        },
        /* Caption */
        '.bodytext-caption': {
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '12px',
          lineHeight: '18px',
        },
        ".shadow-01": {
          boxShadow: "0px 4px 13px rgba(47, 77, 234, 0.15)"
        }
      });
    }),
  ],
}

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
          '100': '#EBFAFE',
          '200': '#99EAFF',
          '300': '#3DD1F7',
          '400': '#0067C5',
          '500': '#0056A4',
          '600': '#00376E',
          '700': '#002C58',
          '800': '#002347',
          '900': '#001C38',
          '1000': '#0056B8',
        },
        'ct-secondary': {
          '100': '#FF7ECB',
          '200': '#FF65C1',
          '300': '#FF58C2',
          '400': '#FF47D2',
          '500': '#FF3BAF',
          '600': '#CC2F8C',
          '700': '#A32670',
          '800': '#831E5A',
          '900': '#681848',
        },
        'ct-tertiary': {
          '100': '#E4FF7E',
          '200': '#D0FF72',
          '300': '#BDFF68',
          '400': '#ACF85F',
          '500': '#9CE156',
          '600': '#7DB445',
          '700': '#649037',
          '800': '#50732C',
          '900': '#405C23',
          '1000': '#6CBD19',
        },
        'ct-neutral': {
          '100': '#FAFCFE',
          '200': '#E2EBF3',
          '300': '#C7D6E6',
          '400': '#B5C7D9',
          '500': '#7893B0',
          '600': '#425F80',
          '700': '#2F4E74',
          '800': '#213650',
          '900': '#152B47',
          'white': "#FFFFFF",
          'black': "#000000",
        },
        'ct-texts': {
          'black': '#333333',
          'white': '#FFFFFF',
          'gray555': '#555555',
          'gray888': '#888888',
        },
        'ct-theme': {
          'blue': '#0D6EFD',
          'indigo': '#6610F2',
          'purple': '#7367F0',
          'pink': '#D63384',
          'red': '#EA5455',
          'orange': '#FD7E14',
          'yellow': '#FF9F43',
          'green': '#28C76F',
          'teal': '#20C997',
          'cyan': "#00CFE8",
        },

        // old-color
        'ct2-neutral': {
          '01': '#FFFFFF',
          '02': '#E0E0E0',
          '03': '#C4C4C4',
          '04': '#4B5563',
          '05': '#333333',
          '06': '#FAFAFA',
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
        /* heading  */
        '.Heading-Desktop-Heading1': {
          fontStyle: "normal",
          fontWeight: "900",
          fontSize: "56px",
          lineHeight: "76px",
        },
        '.Heading-Desktop-Heading2': {
          fontStyle: "normal",
          fontWeight: "900",
          fontSize: "32px",
          lineHeight: "44px",
          textTransform: "uppercase"
        },
        '.Heading-Desktop-Heading3': {
          fontStyle: "normal",
          fontWeight: "900",
          fontSize: "24px",
          lineHeight: "33px",
          textTransform: "uppercase"
        },
        '.Heading-Desktop-Heading4': {
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "18px",
          lineHeight: "25px",
          textTransform: "uppercase"
        },
        '.Heading-Desktop-Heading5': {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "22px",
          lineHeight: "30px",
        },
        '.Heading-Desktop-Heading6': {
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "16px",
          lineHeight: "22px",
        },
        '.Heading-Desktop-Heading7': {
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "14px",
          lineHeight: "19px",
        },
        '.Heading-Desktop-Heading8': {
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "24px",
          lineHeight: "33px",
        },

        '.Heading-Mobile-Heading1': {
          fontStyle: "normal",
          fontWeight: "900",
          fontSize: "32px",
          lineHeight: "44px",
        },
        '.Heading-Mobile-Heading2': {
          fontStyle: "normal",
          fontWeight: "900",
          fontSize: "28px",
          lineHeight: "38px",
        },
        '.Heading-Mobile-Heading3': {
          fontStyle: "normal",
          fontWeight: "900",
          fontSize: "24px",
          lineHeight: "33px",
        },
        '.Heading-Mobile-Heading4': {
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "20px",
          lineHeight: "27px",
        },
        '.Heading-Mobile-Heading5': {
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "9px",
          lineHeight: "20px",
        },
        '.Heading-Mobile-Heading6': {
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "16px",
          lineHeight: "24px",
        },
        // display
        '.Display-Desktop-Display1': {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "96px",
          lineHeight: "131px",
        },
        '.Display-Desktop-Display2': {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "88px",
          lineHeight: "120px",
        },
        '.Display-Desktop-Display3': {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "72px",
          lineHeight: "98px",
        },
        '.Display-Desktop-Display4': {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "64px",
          lineHeight: "87px",
        },
        '.Display-Desktop-Display5': {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "33px",
        },
        '.Display-Desktop-Display-footer': {
          fontStyle: "normal",
          fontSize: "18px",
          lineHeight: "25px",
        },
        // body Desktop
        '.Body-Desktop-Large': {
          fontStyle: "normal",
          fontWeight: "900",
          fontSize: "24px",
          lineHeight: "33px",
          textAlign: "center"
        },
        '.Body-Desktop-Large-Bold': {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "27px",
        },
        '.Body-Desktop-Medium': {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "25px",
        },
        '.Body-Desktop-Medium1': {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "25px",
        },
        '.Body-Desktop-Medium-Bold': {
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "18px",
          lineHeight: "25px",
        },
        '.Body-Desktop-Small': {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "22px",
        },
        '.Body-Desktop-Small-Bold': {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "22px",
        },
        '.Body-Desktop-Small14': {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "19px",
        },
        '.Body-Desktop-Small14Bold': {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "19px",
        },
        // body mobile
        '.Body-Mobile-Small-bold': {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "19px",
        },
        '.Body-Mobile-Small1': {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "16px",
        },
        '.Body-Mobile-Large': {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "25px",
        },
        '.Body-Mobile-Large-Bold': {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "25px",
        },
        '.Body-Mobile-Medium': {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "22px",
        },
        '.Body-Mobile-9px-Medium': {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "9px",
          lineHeight: "12px",
        },
        '.Body-Mobile-9px-Medium1': {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "9px",
          lineHeight: "12px",
        },
        '.Body-Mobile-Medium-Bold': {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "22px",
        },
        '.Body-Mobile-Small': {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "19px",
        },
        '.Body-Mobile-Small-Bold': {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "19px",
        },
        // Button/Desktop
        '.Button-Desktop-Large': {
          fontStyle: "normal",
          fontWeight: "900",
          fontSize: "24px",
          lineHeight: "33px",
        },
        '.Button-Desktop-Large1': {
          fontStyle: "normal",
          fontWeight: "900",
          fontSize: "20px",
          lineHeight: "27px",
        },
        '.Button-Desktop-Medium': {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "25px",
        },
        '.Button-Desktop-Small': {
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "12px",
          lineHeight: "22px",
        },
        '.Footnote-Desktop-Normal': {
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "16px",
        },
        '.Caption-Desktop-Small': {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "22px",
        },
        ".glow": {
          boxShadow: "0px 0px 9px 2px rgba(94, 222, 255, 0.7)",
          background: "#D9D9D9"
        },
        ".glowBorder": {
          boxShadow: "0px 0px 9px 2px rgba(94, 222, 255, 0.7)",
        },
        ".white-glow": {
          boxShadow: " 0px 0px 13px 6px #FFFFFF",
          background: "#D9D9D9"
        },
        ".Secondary-500": {
          boxShadow: " 0px 0px 11px 3px #FFFFFF",
          background: "#FF3BAF"
        },
        ".Rectangle-27": {
          boxShadow: " 0px 0px 10px 2px #FFFFFF",
          background: "#FFFFFF",
          borderRadius: "35px"
        },
      
        ".Body-Desktop-Large": {
          fontFamily: 'Nunito',
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "27px",
          textAlign: "center",

          /* Primary/600 */

          color: "#00376E"
        },
      

      });
    }),
  ],
}
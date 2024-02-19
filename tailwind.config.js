/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

export default {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    colors: {
      ...colors,
      black: '#303133',
      primary: {
        '50': '#f0fdfc',
        '100': '#cef9f6',
        '200': '#9cf3ee',
        '300': '#63e5e3',
        '400': '#2ec0c2',
        '500': '#19afb3',
        '600': '#118a90',
        '700': '#126d73',
        '800': '#14555b',
        '900': '#15484c',
        '950': '#05292e'
      }
    }
  }
}

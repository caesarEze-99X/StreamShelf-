/** @type {import('tailwindcss').Config} */
import TailWindPresets from 'nativewind/preset';

/**
 * This is here in cases where we have dynamic colors and its not
 * registered in the DOM on load of our components due to
 * state change or due to an update on the DOM that causes these colors
 * to be rendered
 */
const safeColorList = [
  'app-black',
  'green-100',
  'green-600',
  'green-800',
  'green-200',
  'white',
  'white-opacity-95',
  'dark-grey',
  'card-color',
  'orange',
  'teal',
  'light-orange',
  'black-200',
  'black-900',
];

const safeColorListGenerated = safeColorList.flatMap(color => [`bg-${color}`, `color-${color}`]);

export const colors = {
  'app-black': '#121212',
  white: '#F5F5F5',
  'white-opacity-95': '#ffffff95',
  'white-opacity-90': '#ffffff90',
  'white-opacity-70': '#ffffff70',
  'white-opacity-12': '#ffffff12',
  green: {
    50: '#93C572',
    100: '#0ECB81',
    200: '#06923E',
    300: '#142c14',
    400: '#2d5128',
    500: '#2C5F4F',
  },
  'card-color': '#1A1A1A',
  teal: {
    300: '#00B7C2',
  },
  'off-white': '#ece9e2',
  'black-opacity-60': '#00000060',
};

const configuration = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [TailWindPresets],
  safelist: [...safeColorListGenerated, 'font-lato-black', 'font-nunito-bold'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        'nunito-reg': 'Nunito-Regular',
        'nunito-bold': 'Nunito-Bold',
        'nunito-light': 'Nunito-Light',
        'nunito-black': 'Nunito-Black',
      },
      fontSize: {
        '2-xs': 10,
        xxs: 11,
        xs: 12,
        sm: 13,
        'sm-1': 14,
        'sm-med': 16,
        rg: 17,
        'rg-md': 18,
        md: 22,
        lg: 35,
        'lg-1': 30,
        'lg-2': 26,
        'lg-3': 32,
        'lg-1-sm': 28,
        xl: 40,
        xxl: 50,
        'text-section-header': 19,
        'sm-2': 15,
      },
    },
  },
  plugins: [],
};

export default configuration;

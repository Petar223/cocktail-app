import { createContext, useState, useMemo, useContext } from 'react';

const tokens = mode => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
        },
        primary: {
          100: '#d0d1d5',
          200: '#a1a4ab',
          300: '#727681',
          400: '#1F2A40',
          500: '#141b2d',
          600: '#101624',
          700: '#0c101b',
          800: '#080b12',
          900: '#040509',
        },
        greenAccent: {
          100: '#dbf5ee',
          200: '#b7ebde',
          300: '#94e2cd',
          400: '#70d8bd',
          500: '#4cceac',
          600: '#3da58a',
          700: '#2e7c67',
          800: '#1e5245',
          900: '#0f2922',
        },
        redAccent: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          300: '#e99592',
          400: '#e2726e',
          500: '#db4f4a',
          600: '#af3f3b',
          700: '#832f2c',
          800: '#58201e',
          900: '#2c100f',
        },
        blueAccent: {
          100: '#cfd9f0',
          200: '#9fb3e1',
          300: '#6f8ed1',
          400: '#3f68c2',
          500: '#4169e1',
          600: '#395ecb',
          700: '#3153b6',
          800: '#2948a0',
          900: '#213d8a',
        },
        blueLight: {
          100: '#cceeff',
          200: '#99ddff',
          300: '#66ccff',
          400: '#33bbff',
          500: '#00bfff',
          600: '#00ace5',
          700: '#0099cc',
          800: '#0087b2',
          900: '#007499',
        },
        yellowAccent: {
          100: '#FFF8E1',
          200: '#FFECB3',
          300: '#FFE082',
          400: '#FFD54F',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
        blackOverlay: 'rgba(10, 10, 10, 0.5)',
        background: '#888',
        redAccentSharp: '#d32f2f',
        backgroundImage: '/images/background_dark_5.jpg',
      }
    : {
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0',
        },
        primary: {
          100: '#040509',
          200: '#080b12',
          300: '#0c101b',
          400: '#f2f0f0',
          500: '#141b2d',
          600: '#434957',
          700: '#727681',
          800: '#a1a4ab',
          900: '#d0d1d5',
        },
        greenAccent: {
          100: '#0f2922',
          200: '#1e5245',
          300: '#2e7c67',
          400: '#3da58a',
          500: '#4cceac',
          600: '#70d8bd',
          700: '#94e2cd',
          800: '#b7ebde',
          900: '#dbf5ee',
        },
        redAccent: {
          100: '#2c100f',
          200: '#58201e',
          300: '#832f2c',
          400: '#af3f3b',
          500: '#db4f4a',
          600: '#e2726e',
          700: '#e99592',
          800: '#f1b9b7',
          900: '#f8dcdb',
        },
        blueAccent: {
          100: '#151632',
          200: '#2a2d64',
          300: '#3e4396',
          400: '#535ac8',
          500: '#6870fa',
          600: '#868dfb',
          700: '#a4a9fc',
          800: '#c3c6fd',
          900: '#e1e2fe',
        },
        blueLight: {
          100: '#007499',
          200: '#0087b2',
          300: '#0099cc',
          400: '#00ace5',
          500: '#00bfff',
          600: '#33bbff',
          700: '#66ccff',
          800: '#99ddff',
          900: '#cceeff',
        },
        yellowAccent: {
          100: '#FF6F00',
          200: '#FF8F00',
          300: '#FFA000',
          400: '#FFB300',
          500: '#FFC107',
          600: '#FFD54F',
          700: '#FFE082',
          800: '#FFECB3',
          900: '#FFF8E1',
        },
        blackOverlay: 'rgba(10, 10, 10, 0.5)',
        background: ' #eee',
        redAccentSharp: '#d32f2f',
        backgroundImage: '/images/background_light_1.jpeg',
      }),
});

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode(prev => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(() => ({ ...tokens(mode), mode }), [mode]);

  return [theme, colorMode];
};

export const useTheme = () => useContext(ColorModeContext);

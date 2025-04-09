import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      bones: {
        // Monos
        black: 'black',
        dimgray: 'color(display-p3 0.156863 0.156863 0.156863 / 1.000000)',
        gainsboro: 'gainsboro',
        darkgray: 'darkgray',
        ghostwhite: 'ghostwhite',
        gray: 'gray',
        lightsteelblue: 'lightsteelblue',
        slategray: 'slategray',
        white: 'white',
        whitesmoke: 'color(display-p3 0.929412 0.92549 0.898039/1)',
        // Yellows
        yellow: 'color(display-p3 1.000000 1.000000 0.000000 / 1.000000)',
        gold: 'color(display-p3 0.964706 0.823529 0/1)',
        goldenrod: 'goldenrod',
        // Blues
        aliceblue: 'color(display-p3 0.941176 0.972549 1.000000 / 1.000000)',
        cyan: 'cyan',
        lavender: 'lavender',
        lightcyan: 'lightcyan',
        blue: 'color(display-p3 0.000000 0.000000 1.000000 / 1.000000)',
        mediumblue: 'mediumblue',
        thistle: 'thistle',
        midnightblue: 'color(display-p3 0.098039 0.098039 0.439216 / 1.000000)',
        // Reds
        red: 'red',
        firebrick: 'firebrick',
        darkred: 'darkred',
        // Purples
        magenta: 'magenta',
        rebeccapurple: 'rebeccapurple',
        indigo: 'indigo',
        // Utilities
        transparent: 'transparent',
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },
  },
  darkMode: 'media',
  plugins: [],
};

export default config;

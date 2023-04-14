const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const spacing = [
  // 0~200
  ...[...Array(200).keys()],
  // 200~300
  ...[222, 234],
  // 300~400
  ...[320],
  // 400~500
  ...[448],
  // 500~600
  ...[550],
  // 600~700
  ...[],
  // 800~
  ...[1440],
];

const convertSpacing = spacing =>
  [...new Set(spacing)].reduce((res, space) => {
    res[space] = `${space}px`;
    return res;
  }, {});
const convertSpacingWithoutPx = spacing =>
  [...new Set(spacing)].reduce((res, space) => {
    res[space] = `${space}`;
    return res;
  }, {});

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '360px', // mobile
      md: '712px', // tablet
      lg: '1440px', // desktop
    },
    truncate: {
      lines: {
        2: '2',
        3: '3',
        4: '4',
      },
    },
    extend: {
      colors: {
        ...defaultTheme.colors,

        blue: '#293FFF',
        red: '#FF6262',
        yellow: '#FFC875',

        'light-blue': '#7E8BFF',

        black: '#191F28',

        'grayscale-7': '#1F2732',
        'grayscale-6': '#333D4B',
        'grayscale-5': '#515A68',
        'grayscale-4': '#6D7684',
        'grayscale-3': '#ADB3BE',
        'grayscale-2': '#E5E7EC',
        'grayscale-1': '#F3F4F5',

        white: '#FFFFFF',

        game: '#7636FF',
        whitelist: '#F2F2F2',
        sbt: '#FF94CE',
        token: '#FFA869',
        general: '#44B89C',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        9: '9px',
        10: '10px',
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        48: '48px',
      },
      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      spacing: {
        ...defaultTheme.spacing,
        ...convertSpacing(spacing),

        'category-icon': 'calc(50% - 22px)',
      },
      width: theme => ({
        ...defaultTheme.width,
        ...theme('spacing'),
      }),
      height: theme => ({
        ...defaultTheme.height,
        ...theme('spacing'),
      }),
      minWidth: theme => ({
        ...defaultTheme.minWidth,
        ...theme('spacing'),
      }),
      maxWidth: theme => ({
        ...defaultTheme.maxWidth,
        ...theme('spacing'),
      }),
      minHeight: theme => ({
        ...defaultTheme.minHeight,
        ...theme('spacing'),
      }),
      maxHeight: theme => ({
        ...defaultTheme.maxHeight,
        ...theme('spacing'),
      }),
      lineHeight: theme => ({
        ...defaultTheme.lineHeight,
        ...convertSpacing([...Array(101).keys()]),
      }),
      borderRadius: theme => ({
        ...defaultTheme.lineHeight,
        ...convertSpacing([...Array(101).keys()]),
      }),
      borderWidth: theme => ({
        ...defaultTheme.borderWidth,
        ...convertSpacing([...Array(21).keys()]),
      }),
      animation: theme => ({
        ...defaultTheme.animation,
        skeleton: 'skeleton 1.8s ease-in-out infinite',
      }),
      keyframes: theme => ({
        ...defaultTheme.keyframes,
        skeleton: {
          '0%, 100%': { background: '#333D4B' },
          '50%': { background: '#515A68' },
        },
      }),
      zIndex: theme => ({
        ...defaultTheme.zIndex,
        ...convertSpacingWithoutPx([...Array(101).keys()]),
        995: 995,
        996: 996,
        997: 997,
        998: 998,
        999: 999,
        1000: 1000,
        1001: 1001,
        1002: 1002,
        1003: 1003,
        1004: 1004,
        1005: 1005,
      }),
      boxShadow: theme => ({
        ...defaultTheme.boxShadow,
        card: '0px 4px 20px rgba(41, 63, 255, 0.1)',
        'button-hover': '0px 2px 12px rgba(102, 128, 230, 0.5)',
        'notification-content': '0px 4px 20px rgba(0, 0, 0, 0.3)',
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({});
      addComponents({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.absolute-center': {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.absolute-center-x': {
          left: '50%',
          transform: 'translateX(-50%)',
        },
        '.absolute-center-y': {
          top: '50%',
          transform: 'translateY(-50%)',
        },

        '.clickable': {
          cursor: 'pointer',
        },
        '.non-clickable': {
          cursor: 'not-allowed',
          userSelect: 'none',
        },

        '.dark-transition': {
          transitionProperty: 'background-color,border-color,color,fill,stroke',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms',
        },

        '.transition-color': {
          transitionProperty: 'background-color,border-color,color,fill,stroke',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms',
        },

        '.transition-width': {
          transitionProperty: 'width',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms',
        },

        '.transition-left': {
          transitionProperty: 'left',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms',
        },

        '.font-r-11': { fontSize: '11px', lineHeight: '18px', fontWeight: 400 },
        '.font-r-12': { fontSize: '12px', lineHeight: '20px', fontWeight: 400 },
        '.font-r-14': { fontSize: '14px', lineHeight: '22px', fontWeight: 400 },
        '.font-r-16': { fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
        '.font-r-18': { fontSize: '18px', lineHeight: '26px', fontWeight: 400 },

        '.font-sb-12': { fontSize: '12px', lineHeight: '20px', fontWeight: 600 },
        '.font-sb-14': { fontSize: '14px', lineHeight: '22px', fontWeight: 600 },
        '.font-sb-16': { fontSize: '16px', lineHeight: '24px', fontWeight: 600 },
        '.font-sb-18': { fontSize: '18px', lineHeight: '26px', fontWeight: 600 },
        '.font-sb-20': { fontSize: '20px', lineHeight: '28px', fontWeight: 600 },
        '.font-sb-24': { fontSize: '24px', lineHeight: '32px', fontWeight: 600 },
        '.font-sb-28': { fontSize: '28px', lineHeight: '38px', fontWeight: 600 },
        '.font-sb-32': { fontSize: '32px', lineHeight: '38px', fontWeight: 600 },
      });
      addUtilities({});
    }),
  ],
};

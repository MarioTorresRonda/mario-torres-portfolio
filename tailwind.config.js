const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
      screens: {
        'xl-h': { 'raw': '(min-height: 700px)' },
      },
      keyframes: {
        opacityLoad: {
          '0%': { "z-index": 20 },
          '75%': { "z-index": 20, "transform": "translateY(0)"},
          '100%': { "z-index": -10, "transform": "translateY(-100%)"},
        },
        overflowLoad: {
          '0%': { "overflow": "hidden" },
          '100%': { "overflow": "unset" },
        },
        fromTop: {
          '0%': { "opacity": "0%", "transform": "translateY(-30%)" },
          '100%': { "opacity": "100%", "transform": "translateY(0)" },
        }
      },
      animation: {
        opacityLoad: 'opacityLoad 4s',
        overflowLoad: 'overflowLoad 4s',
        fromTop: 'fromTop 400ms',
      }
    },
    variants: {
      extend: {
        animation: ['group-hover'],
      },
    },
  },

  plugins: [],
};

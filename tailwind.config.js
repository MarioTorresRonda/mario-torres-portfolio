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
          '0%': { opacity: 1, "z-index": 20},
          '75%': { opacity: 1, "z-index": 20},
          '100%': { opacity: 0, "z-index": -10 },
        }
      },
      animation: {
        opacityLoad: 'opacityLoad 4s',
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

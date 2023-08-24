module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Gilda Display',
      secondary: 'Barlow',
      tertiary: 'Barlow Condensed',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: {
          DEFAULT: '#a37d4c',
          hover: '#967142',
        },
      },
      animation: {
        slideInRight: "slideInRight 1s ease-out",
      },
      keyframes: {
        slideInRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
      backgroundImage: {
        room: "url('./assets/img/room.jpg')",
      },
    },
    
  },
  plugins: [],
};

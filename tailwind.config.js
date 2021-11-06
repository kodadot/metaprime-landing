module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#e5e5e5"
          // 100: "#ebebf0",
          // 200: "#d8d8dc",
          // 300: "#bcbcc0",
          // 400: "#aeaeb2",
          // 500: "#8e8e93",
          // 600: "#6c6c70",
          // 700: "#4a4a4f",
        },
        dark: "#141414",
        primary: "#6AFF0F",
        secondary: {
          DEFAULT: "#13EEC7",
          light: "#2AF6FF"
        }
      },
      spacing: {

      },
      fontSize: {

      },
      lineHeight: {

      },
      borderRadius: {
      },
      height: {
        // 22: "5.5rem",
      },
      screens: {

      },
      minWidth: {
      },
      zIndex: {
        "-10": "-10",
      },
    },
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      secondary: ['"Work Sans"', "sans-serif"]
    },
    boxShadow: {
      custom: "-16px 16px 0 0 #13EEC7",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      dark: theme('colors.dark')
      // primary: theme("colors.primary"),
      // secondary: theme("colors.secondary"),
      // light: theme("colors.primary.light"),
      // overlay: "rgba(34, 65, 149, 0.1)",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      // primary: theme("colors.primary"),
      // secondary: theme("colors.secondary"),
      // light: theme("colors.primary.light"),
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      // default: theme("colors.gray.700"),
      // primary: theme("colors.primary"),
      // secondary: theme("colors.secondary"),
      // tertiary: theme("colors.blue"),
      // light: theme("colors.primary.light"),
    }),
    placeholderColor: (theme) => ({
      // DEFAULT: theme("colors.gray.400"),
      // primary: theme("colors.primary"),
    }),
    fill: (theme) => ({
      ...theme("colors"),
      white: theme("colors.white"),
      // light: theme("colors.white"),
      // gray: theme("colors.gray.500"),
    }),
    backgroundImage: (theme) => ({
      ...theme("colors"),
      'lines': "url('/assets/backgrounds/lines.webp')",
      'lines-secondary': "url('/assets/backgrounds/lines-secondary.webp')",
      'grid': "url('/assets/backgrounds/grid.webp')"
    }),
    outline: {
      // dashed: ["1px dashed white", "1px"],
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          margin: '0 auto',
          padding: '0 16px',
          width: '100%',
          '@screen xl': {
            maxWidth: '1156px',
            padding: 0
          }
        }
      }, {
        variants: ['responsive']
      })
    }
  ]
};

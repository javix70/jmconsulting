const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      navbar: "1.419rem",
    },
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-granite-grey)",
        secondary: "var(--color-almond)",
        'granite-grey': "var(--color-granite-grey)",
        'jelly-bean-blue': "var(--color-jelly-bean-blue)",
        'rose-taupe': "var(--color-rose-taupe)",
        'black-coral': "var(--color-black-coral)",
        'nyanza': "var(--color-nyanza)",
        'opal': "var(--color-opal)",
        'raisin-black': "var(--color-raisin-black)",
        'almond': "var(--color-almond)"
      },
      textColor: {
        default: "var(--color-almond)"
      },
      backgroundColor: {
        default: "var(--color-almond)"
      },
      backgroundImage: {
        'cover-wave': "url('./src/icons/cover_wave.svg')",
      },
      borderColor: {
        default: "var(--color-border)"
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};

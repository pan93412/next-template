module.exports = {
  purge: {
    content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: ['grid-cols-1', 'grid-cols-4'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "sans": "'Noto Sans TC', sans-serif",
        "serif": "'Noto Serif TC', serif",
        "mono": "'JetBrains Mono', monospace",
      },
      minWidth: {
        "field": "17rem",
      },
      width: {
        "phone": "100vw", // full-screen-width every fields
        "tablet": "30vw", // 1/3 every fields
        "desktop": "20vw" // 1/4 every fields
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}

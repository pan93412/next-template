module.exports = {
  purge: {
    content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: ['grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4'],
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
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}

// import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        '2xl': '32px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(167, 139, 250, 0.15)',
        'premium': '0 12px 48px rgba(0, 0, 0, 0.5), 0 0 20px rgba(167, 139, 250, 0.15)',
      },
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-card': '#161616',
      },
    },
  },
  plugins: [
    // aspectRatio,
  ],
}

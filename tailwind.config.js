// // tailwind.config.js

// import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

export default {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    react(),
    // tailwindcss(),
  ],
}

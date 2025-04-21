import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/**/*',
          dest: '', // จะ copy จาก public มาวางที่ root ของ dist
        },
        {
          src: [
            'src/assets/styles/**/*',
         
          ],
          dest: 'assets', // จะได้เป็น dist/assets/
        },
      ],
    }),
  ],
   base: '/joe-portfolio/', // เอาไว้เปิดใช้ถ้าจะ deploy บน GitHub Pages
})

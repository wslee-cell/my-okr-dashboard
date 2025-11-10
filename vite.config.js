import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // <-- 1. 디자인 도구(tailwind) 불러오기
import autoprefixer from 'autoprefixer' // <-- 2. 디자인 도구(autoprefixer) 불러오기

// https://vitejs.dev/config/
export default defineConfig({
  // 3. CSS 설정을 여기에 '통합'하기
  css: {
    postcss: {
      plugins: [
        // 4. tailwindcss를 '여기서' 직접 설정! (파일 삭제했으니까)
        tailwindcss({
          content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        }),
        autoprefixer, // autoprefixer는 그냥 실행
      ],
    },
  },
  plugins: [react()],
})
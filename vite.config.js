import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
    // content: ['./index.html', './src/**/*.{vue,js,ts}'],
    safelist: [
    'opacity-0',
    'translate-y-8',
    'translate-y-6',
    '-translate-x-10',
    'translate-x-10',
    'scale-95',
    'transition-all',
    'duration-700',
    'ease-out',
  ],
  theme: {
    // extend: {
    //   fontFamily: {
    //     display: ['"Bebas Neue"', 'sans-serif'],
    //     body: ['"DM Sans"', 'sans-serif'],
    //   },
    // },
  },
  // plugins: [],
})

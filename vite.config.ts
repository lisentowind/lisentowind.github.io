import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from "unocss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS({
    presets: [presetAttributify({}), presetUno()],
    rules: [
      [/^fs-(\d+\.{0,1}\d{0,2})$/, ([, d]) => ({ "font-size": `${d}px` })],
      [/^leh-(\d+\.{0,1}\d{0,2})$/, ([, d]) => ({ "line-height": `${d}` })],
    ]
  })],
  server: {
    host: '0.0.0.0',
    port: 9527,
    open: true,
    proxy: {
      '/goodmap': 'http://192.168.10.11:8810/showtime'
    }

  },
  resolve: {
    //设置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
      '*': resolve('')
    },
  },
})

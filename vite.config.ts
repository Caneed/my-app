import { defineConfig } from 'vite'
import { join } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { LayuiVueResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [LayuiVueResolver()]
  }),
  Components({
    resolvers: [LayuiVueResolver()]
  })],
  // 路径映射
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    }
  },
  // 跨域配置
  server: {
    proxy: {
      '/steamApi': {
        target: 'http://api.steampowered.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/steamApi/, '')
      },
      '/steamStoreApi': {
        target: 'https://store.steampowered.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/steamStoreApi/, '')
      }
    }
  },
  // 环境变量文件的目录
  envDir: 'env'
})

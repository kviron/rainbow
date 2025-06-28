import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  ssr: {
    external: ['js-cookies'],
  },
  resolve: {
    alias: [
      {find: '@', replacement: '/src'}
    ]
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:3001/'),
    __PROJECT__: JSON.stringify('frontend'),
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    watch: { usePolling: true }
  }
})

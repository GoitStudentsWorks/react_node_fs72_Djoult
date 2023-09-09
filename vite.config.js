import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  base: '/react_node_fs72_Djoult',
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
    },
  }
});

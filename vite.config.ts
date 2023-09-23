import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-todo-list-demo/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()]
});

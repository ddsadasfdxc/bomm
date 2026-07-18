import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

function copyDataDir() {
  return {
    name: 'copy-data-dir',
    writeBundle() {
      const srcDir = path.resolve('data');
      const destDir = path.resolve('dist', 'data');
      if (fs.existsSync(srcDir)) {
        fs.mkdirSync(destDir, { recursive: true });
        fs.cpSync(srcDir, destDir, { recursive: true, force: true });
      }
    }
  };
}

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  plugins: [copyDataDir()]
});

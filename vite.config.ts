import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
const _plugins = [react()];

export default defineConfig({
  plugins: _plugins
});
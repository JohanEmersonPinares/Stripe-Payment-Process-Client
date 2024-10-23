import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/create-payment-intent': {
        target: 'http://localhost:5000', // Cambia esto a la URL de tu backend
        changeOrigin: true, // Cambia el origen de la solicitud para coincidir con el objetivo
        secure: false, // Si estás usando HTTPS, pon esto en true
      },
    },
  },
});

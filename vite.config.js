import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    host: true, // Allow LAN access
    open: true,
    // proxy: { "/api": { target: "http://localhost:3000", changeOrigin: true } } // Enable only if you have a backend
  },
});

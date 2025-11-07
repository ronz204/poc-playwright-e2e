import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@Modules": "/src/Modules",
      "@Atoms": "/src/Components/Atoms",
      "@Layouts": "/src/Components/Layouts",
      "@Molecules": "/src/Components/Molecules",
      "@Organisms": "/src/Components/Organisms",
    },
  },
});

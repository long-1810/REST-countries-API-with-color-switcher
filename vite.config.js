import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/REST-countries-API-with-color-switcher/",
  plugins: [react()],
});

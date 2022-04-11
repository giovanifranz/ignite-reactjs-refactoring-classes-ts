import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), reactRefresh(), tsConfigPaths()],
  server: {
    host: true,
    port: 3000,
  },
});

import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Adjust the entry point as necessary
      name: "abc-base-ui",
      fileName: (format) => `abc-base-ui.${format}.js`,
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled
      external: ["react", "react-dom"], // Add any other external dependencies
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

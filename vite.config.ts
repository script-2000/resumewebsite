import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.BASE_URL": JSON.stringify(env.BASE_URL),
      "process.env.TINYMCE_API_KEY": JSON.stringify(env.TINYMCE_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: "/resumewebsite",
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `[name].[hash].js`, // Ensure hashed filenames for cache busting
          chunkFileNames: `[name].[hash].js`,
          assetFileNames: `[name].[hash][extname]`,
        },
      },
    },
    plugins: [react()],
  };
});

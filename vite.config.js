import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
export default defineConfig(function (_a) {
    var mode = _a.mode;
    var env = loadEnv(mode, process.cwd(), "");
    return {
        define: {
            "process.env.BASE_URL": JSON.stringify(env.BASE_URL),
            "process.env.TINYMCE_API_KEY": JSON.stringify(env.TINYMCE_API_KEY),
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, "./src"),
            },
        },
        base: "/resumewebsite/",
        plugins: [react()],
    };
});

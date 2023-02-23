import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/test": {
                target: "http://35.216.58.5/",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/test/, ""),
            },
            "/api": {
                target: "http://35.216.58.5/",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, "api"),
            },
        },
    },
    plugins: [react()],
})

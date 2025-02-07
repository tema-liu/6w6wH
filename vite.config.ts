import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 讀取 `.env` 變數
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      proxy: {
        // API 路徑
        "^/(collectshop|api|user|stoers|notify|users|home)/.*": {
          target: env.VITE_API_URL, // ✅ 正確使用環境變數
          changeOrigin: true,
        },
        // 圖片路徑特別處理
        "/Picture": {
          target: env.VITE_API_URL, // ✅ 讓圖片請求也使用環境變數
          changeOrigin: true,
          configure: (proxy) => {
            proxy.on("proxyRes", function (proxyRes) {
              proxyRes.headers["Cache-Control"] = "no-cache";
            });
          },
        },
      },
    },
  };
});

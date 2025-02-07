import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // API 路徑
      "^/(collectshop|api|user|stoers|notify|users|home)/.*": {
        target: "https://6w6wh.rocket-coding.com",
        changeOrigin: true,
      },
      // 圖片路徑特別處理
      "/Picture": {
        target: "https://6w6wh.rocket-coding.com",
        changeOrigin: true,
        // 加入以下配置
        configure: (proxy, options) => {
          proxy.on("proxyRes", function (proxyRes, req, res) {
            proxyRes.headers["Cache-Control"] = "no-cache";
          });
        },
      },
    },
  },
});

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// 用來加載語言檔案
import Backend from "i18next-http-backend";

const supportedLngs = ["en", "id"]; // 支援英文和印尼文

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // 將 i18n 傳遞給 react-i18next
  .init({
    supportedLngs,
    debug: true,
    fallbackLng: "en", // 如果沒有對應的翻譯，使用此語言
    returnEmptyString: false,
    ns: ["popular"],
    react: {
      useSuspense: true, // 啟用 Suspense,確保資料載入成功再執行
    },
    interpolation: {
      escapeValue: false, // React 已經處理 XSS 保護
    },
    backend: {
      // 從 public 文件夾載入翻譯檔案
      loadPath: "/locales/{{lng}}/{{ns}}.json", // 載入的路徑模式
    },
    detection: {
      order: ["localStorage"],
      caches: ["cookie", "localStorage"], // 儲存語言偏好
    },
  });

export default i18n;

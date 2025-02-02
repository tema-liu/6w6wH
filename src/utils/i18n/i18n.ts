import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// 用來加載語言檔案
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // 將 i18n 傳遞給 react-i18next
  .init({
    debug: true,
    fallbackLng: "en", // 如果沒有對應的翻譯，使用此語言
    returnEmptyString: false, // 如果翻譯為空，則顯示空字串
    interpolation: {
      escapeValue: false, // React 已經處理 XSS 保護
    },
    backend: {
      // 從 public 文件夾載入翻譯檔案
      loadPath: "/locales/{{lng}}/{{ns}}.json", // 載入的路徑模式
    },
    detection: {
      order: [
        "localStorage",
        "navigator",
        "cookie",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie", "localStorage"], // 儲存語言偏好
    },
  });

export default i18n;

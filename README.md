<div align="center" >
  <img src="https://raw.githubusercontent.com/tema-liu/6w6wH/e41094908e1823b79e4210b2e2b290ff107cb4a5/src/assets/logo_log_in%20(1).svg" width="300" alt="描述文字" />
</div>
<h1 align="center" style="font-weight: 700">6w6wH｜移工友善商店</h1>
<div align="center" >
<a href="https://www.notion.so/1d6becbca3664486863a183f0a47ba82" >專案文件</a ><span> | <span/>
<a href="https://6w6w-h.vercel.app/" >專案網址</a ><span> | <span/>
<a href="https://6w6wh.rocket-coding.com/swagger/index.html?url=/swagger/v1/swagger.json" >swagger</a >
</div>
<p align="center" >移工友善商店，幫助移工輕鬆找尋有意願擁抱新族群的商家</p>

---

## 簡介

5 人團隊(2 位 UI 、1 位前端、2 位後端)開發移工社群平台，透過店家資訊分享與社群互動功能（包含: 追蹤、點讚、通知系統），協助在台移工快速找到友善商家，促進文化交流與生活適應。

  <img src="https://raw.githubusercontent.com/tema-liu/6w6wH/refs/heads/fixUiRequest/src/assets/Frame%201984077608.png" alt="描述文字" />

## 功能介紹

> 用戶端分為遊客端及會員端

**► 遊客端**

- 遊客查看首頁熱門店家及評論
- 遊客搜尋及篩選店家
- 遊客查看店家詳細資料
- 遊客跳轉 googleMap 導航
- 遊客一鍵朗讀店家地址或店名
- 遊客指出店家錯誤回報
- 遊客查看會員資料

**► 會員端**

- 會員註冊/登入
- 會員新增店家
- 會員收藏店家
- 會員評論店家
- 會員點讚、刪除、檢舉評論或留言
- 會員追蹤其他會員
- 會員查看會員詳細資訊
- 會員修改個人資料
- 會員查看通知

## 建議體驗流程

- **遊客:**

1. 瀏覽首頁「熱門店家」/「最新評論」
2. 點擊「搜尋」→ 輸入篩選條件 → 顯示列表 → 查看店家詳細
3. 進入「店家詳細」→ 使用「朗讀」、「Google Map 導航」、「錯誤回報」、「查看評論」

- **會員:**

1. 註冊會員帳號
2. 點擊「search」→ 輸入篩選條件 → 顯示列表 → 查看店家詳細
3. 新增店家評論
4. 點讚或留言其他會員
5. 點進會員大頭貼追蹤其會員
6. 若想新增店家，進入 addStore 頁面，取得自己當下定位或地區
7. 確定搜索的地區，出現結果店家
8. 確認欲新增的店家，幫店家增加相應標籤並送出
9. 跳轉到剛新增的店家
10. 收藏店家

## 下載及安裝

Clone 專案

```bash
  git clone https://github.com/tema-liu/6w6wH.git
```

進入專案

```bash
   cd 6w6wH
```

安裝套件

```bash
  npm install
```

新增環境變數檔案 .env.development

```bash
# Google Maps 設定
VITE_GOOGLE_MAPS_ID= YOUR_MAPS_ID
VITE_GOOGLE_MAPS_API_KEY= YOUR_MAPS_API_KEY

# Google OAuth 設定
VITE_GOOGLE_OAUTH_CLIENTID= YOUR_GOOGLE_OAUTH_CLIENTID

# API 伺服器位址
VITE_API_URL= https://dev-api.yourwebsite.com
```

啟動專案

```bash
  npm run dev
```

---

## 資料夾結構

```flow
└── Project Root/
    ├── public/
    │   └── locales/  # 存放i18n（國際化）語言檔案
    │       ├── en/  # 英文語系
    │       │   └── popular.json
    │       └── id/  # 印尼語系
    │           └── popular.json
    ├── src/
    │   ├── apis/
    │   │   └── getUserProfile.ts  # 取得使用者資訊的 API
    │   │   └──...
    │   ├── assets/ # 放置圖片資料
    │   ├── component/  # 可重用的 React 元件
    │   ├── constants/  # 常數定義（例如 API 路徑、狀態碼）
    │   ├── hooks/  # 自訂義hook
    │   ├── pages/  # 應用的主要頁面
    │   │   ├── Popular/
    │   │   └── ...
    │   ├── styles/
    │   │   └── theme.ts  # 主題設定
    │   ├── type/  # TypeScript 類型定義
    │   │   ├── formType.ts
    │   │   └── type.ts  # api類型
    │   ├── utils/
    │   │   ├── i18n/
    │   │   ├── redux/
    │   │   └── styled-components/
    │   │          └── GlobalStyle.tsx # 全域樣式
    │   ├── AppRoutes.tsx
    │   └── main.tsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vercel.json
    └── vite.config.ts
```

---

<!--StartFragment--><h2>Commit Message 規範</h2>

| Type 類型 | Usage 格式 | example 範例                     |
| --------- | ---------- | -------------------------------- |
| 新增功能  | 新增-      | 新增-查詢店家功能                |
| 修補錯誤  | 修正-      | 修正-API 串接邏輯錯誤            |
| 樣式相關  | 樣式-      | 樣式-更改 PrimaryButton 按鈕樣式 |
| 雜務相關  | 雜務-      | 雜務-安裝 i18n 套件              |
| 重構代碼  | 重構-      | 重構-useDebounce 代碼            |

<!-- notionvc: 82013f6d-dca5-4cc5-a806-0510e476cd44 --><!--EndFragment-->

---

## Git 分支管理規範

- Master（主分支）：專案的主要分支，只有穩定且測試完成的功能才會合併進來。
- Layout（切版分支）：負責畫面開發，所有與 UI / CSS 相關的改動皆在此分支處理。
- Logic（邏輯分支）：負責功能與邏輯開發，當開發時需要畫面，可從 Layout 分支取得對應的 UI。

---

## Git Flow

![image.png](https://raw.githubusercontent.com/tema-liu/6w6wH/refs/heads/fixUiRequest/src/assets/Frame_2_2.png)

- 最初主要分 Master、Layout、Logic 三種分支，主分支、切版、邏輯
- 將路由 merge 到 Layout 分支時進行切版
- 當我在 Logic 分支上需要畫面時，從 C1 取得畫面
- 進行邏輯的途中，遇到 UI 改設計圖時，跳回分支 Layout 修正後，**C2 merge C1**取得修正後畫面便可持續開發，保持**Git Flow 整潔**

## 開發環境

<h2 align="center">:art:UI設計</h2>
<div >
<img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" />
<img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" />
<img src="https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white" />
<div />

> **設計工具與指南:**

- **Figma**
- **Human Interface Guidelines**
- **Material Design 3**
- **多色**

<h2 align="center">:computer:前端技術</h2>
<div ><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
<img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<div><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
<div>

> **JavaScript 框架與工具:**

- **React 18**
- **Styled Components**
- **TypeScript**

> **版本控制:**

- **Git**

> **狀態管理:**

- **@reduxjs/toolkit**
- **redux-persist**

> **多語言支援:**

- **React i18next**

> **地圖與視覺化技術:**

- **Google Maps Platform**
- **@vis.gl/react-google-maps**

> **第三方登入:**

- **@react-oauth/google**

> **其他:**

- **swiper**
- **React Marquee**
<h2 align="center">:globe_with_meridians:後端技術</h2>
<img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" />
<img src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white" />
<img src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" />
<img src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white" />
<img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
<img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />

> 後端框架及語言:

- **C# (.NET Framework)**
- **.NET Framework Web API**
- **RESTful API**

> 資料庫:

- **MSSQL**

> 雲端 & 伺服器:

- **Azure VM**

> 版本控制:

- **Git**

> 其他:

- **爬蟲**

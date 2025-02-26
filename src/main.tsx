import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import global_en from "./translations/en/global.json";
import global_id from "./translations/id/global.json";
import global_ko from "./translations/ko/global.json";
import global_zh from "./translations/zh-CN/global.json";
import global_hi from "./translations/hi/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { LanguageProvider } from "./translations/LanguageProvider.tsx";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en, // Inggris
    },
    id: {
      global: global_id, // Indonesia
    },
    ko: {
      global: global_ko, // Korea Selatan
    },
    zh: {
      global: global_zh, // Cina
    },
    hi: {
      global: global_hi, // India
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </I18nextProvider>
  </StrictMode>
);

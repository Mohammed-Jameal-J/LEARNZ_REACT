import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "./index.css";
import App from "./App.jsx";
import store from "./store";

// Import translation files
import en from "./locales/en.json";
import ta from "./locales/ta.json";
import ar from "./locales/ar.json";
import hi from "./locales/hi.json";

// i18next configuration
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ta: { translation: ta },
    ar: { translation: ar },
    hi: { translation: hi },
  },
  lng: localStorage.getItem("selectedLanguage") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next  } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationUZ from './locales/uz/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  uz: {
    translation: translationUZ
  }
};

i18n
  .use(detector)
  .use(initReactI18next ) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "uz", // use en if detected lng is not available
    lng: 'uz',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
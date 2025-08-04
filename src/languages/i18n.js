import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import hi from './locales/hi.json';
import { storage } from '../utils/storage';
import { key } from '../utils/key';


const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    const savedLang = await storage.getItem(key.STORAGE_KEYS.LANGUAGE);
    if (savedLang) {
      callback(savedLang);
    } else {
      // const deviceLang = getDeviceLanguage();
      callback('en'); // fallback if no saved lang
    }
  },
  init: () => { },
  cacheUserLanguage: async (lang) => {
    await storage.setItem(key.STORAGE_KEYS.LANGUAGE, lang);
  },
};





i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3', // for older versions of React Native
    // lng: 'en', // default language
    // fallbackLng: 'en',
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

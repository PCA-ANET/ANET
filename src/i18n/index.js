import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import fr from './locales/fr';
import i18next from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    fr: { ...fr },
    en: { ...en },
  },
  lng: 'fr',
  fallbackLng: 'fr',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  saveMissing: true,
});

i18next.on('missingKey', function(lngs, namespace, key) {
  /* eslint-disable */
  console.log(`A missing translation for the key ${key}`);
});

export const t = (key, args) => i18next.t(key, args);
export default i18n;

import { useTranslation } from 'react-i18next';
import { storage } from '../utils/storage';
import { key } from '../utils/key';

const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lng) => {
    i18n.changeLanguage(lng);
    await storage.setItem(key.STORAGE_KEYS.LANGUAGE,lng);
  };

  const currentLanguage = i18n.language;

  return { changeLanguage, currentLanguage };
};

export default useLanguage;

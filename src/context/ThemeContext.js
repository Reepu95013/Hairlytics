import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import Colors from '../constants/colors';
import { storage } from '../utils/storage';
import { key } from '../utils/key';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState();
  const [themeType, setThemeType] = useState();
  const [loading, setLoading] = useState(true);
  const fontFamily = 'Merienda-VariableFont_wght';

  useEffect(() => {
    getTheme();
  }, []);

  const getTheme = async () => {
    const savedTheme = await storage.getItem(key.STORAGE_KEYS.THEME);
    console.log("test", savedTheme);
    if (savedTheme !== null) {
      setThemeType(savedTheme);
      setThemeColor(Colors[savedTheme.toLowerCase()]);
    } else {
      setThemeType(key.STORAGE_KEYS.DARK);
      setThemeColor(Colors.dark);
      await storage.setItem(key.STORAGE_KEYS.THEME, key.STORAGE_KEYS.DARK);
    }
    setLoading(false);
  };

  const toggleTheme = async () => {
    const newTheme = themeType === key.STORAGE_KEYS.DARK ? key.STORAGE_KEYS.LIGHT : key.STORAGE_KEYS.DARK;
    setThemeType(newTheme);
    setThemeColor(Colors[newTheme.toLowerCase()]);
    await storage.setItem(key.STORAGE_KEYS.THEME, newTheme);
  };

  const contextValue = useMemo(() => ({
    themeColor,
    themeType,
    fontFamily,
    toggleTheme,
  }), [themeColor, themeType,]);

  if (loading) return null; // Or your custom loader

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useColorTheme = () => useContext(ThemeContext);

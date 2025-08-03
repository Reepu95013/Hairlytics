import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  // Save value
  setItem: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error('Storage setItem error:', e);
    }
  },

  // Get value
  getItem: async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Storage getItem error:', e);
      return null;
    }
  },

  // Remove value
  removeItem: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error('Storage removeItem error:', e);
    }
  },

  // Check if key exists
  hasKey: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null;
    } catch (e) {
      console.error('Storage hasKey error:', e);
      return false;
    }
  },

  // Clear all storage (use with caution)
  clearAll: async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error('Storage clearAll error:', e);
    }
  },
};

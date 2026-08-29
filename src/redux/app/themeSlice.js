import { createSlice } from '@reduxjs/toolkit';
import Colors from '../../constants/colors';
import { key } from '../../utils/key';

const FONT_FAMILY = 'Merienda-VariableFont_wght';

const initialState = {
  themeType: key.STORAGE_KEYS.DARK,
  themeColor: Colors.dark,
  fontFamily: FONT_FAMILY,
};

const themeSlice = createSlice({
  name: 'theme',

  initialState,

  reducers: {
    setTheme: (state, action) => {
      const theme = action.payload;

      state.themeType = theme;
      state.themeColor = Colors[theme.toLowerCase()];
    },

    toggleTheme: state => {
      const newTheme =
        state.themeType === key.STORAGE_KEYS.DARK
          ? key.STORAGE_KEYS.LIGHT
          : key.STORAGE_KEYS.DARK;

      state.themeType = newTheme;
      state.themeColor = Colors[newTheme.toLowerCase()];
    },

    setFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
  },
});

export const {
  setTheme,
  toggleTheme,
  setFontFamily,
} = themeSlice.actions;

export default themeSlice.reducer;
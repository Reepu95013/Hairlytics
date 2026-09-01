import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,

  toast: {
    visible: false,
    message: null,
    type: null,
  },
};

const appSlice = createSlice({
  name: 'app',

  initialState,

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    showToast: (state, action) => {
      state.toast.visible = true;
      state.toast.message = action.payload.message;
      state.toast.type = action.payload.type;
    },

    hideToast: state => {
      state.toast.visible = false;
      state.toast.message = null;
    },

    resetApp: state => {
      state.loading = false;

      state.toast = {
        visible: false,
        message: null,
        type: null,
      };
    },
  },
});

export const {
  setLoading,
  showToast,
  hideToast,
  resetApp,
} = appSlice.actions;

export default appSlice.reducer;
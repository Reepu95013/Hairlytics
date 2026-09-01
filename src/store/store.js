import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import persistConfig from './persistConfig';
import authReducer from '../redux/auth/authSlice';
import themeReducer from '../redux/app/themeSlice';
import appReducer from '../redux/app/appSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  theme:themeReducer,
  app:appReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

import { View, Text, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/screens/SplashScreen';
import './src/languages/i18n';
import { LoaderProvider } from './src/context/LoaderContext';
import store, { persistor } from './src/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000); // simulate splash
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoaderProvider>
          <AppNavigator />
        </LoaderProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

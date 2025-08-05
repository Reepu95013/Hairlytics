import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/screens/SplashScreen';
import './src/languages/i18n';
import { ThemeProvider } from './src/context/ThemeContext';
import { AuthProvider, useAuth } from './src/context/AuthContext';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000); // simulate splash
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <AuthProvider>
      <ThemeProvider>
        <AppNavigator/>
      </ThemeProvider>
    </AuthProvider>

  );

}

export default App
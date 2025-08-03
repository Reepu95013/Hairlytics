import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/screens/SplashScreen';
import './src/languages/i18n';

const App = () => {
 const [isAdmin, setIsAdmin] = useState(false); // could be from AsyncStorage or API
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 2000); // simulate splash
  // }, []);

  if (isLoading) return <SplashScreen />;

  return <AppNavigator isAdmin={isAdmin} />;
}

export default App
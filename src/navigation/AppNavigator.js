import { NavigationContainer } from '@react-navigation/native';
import UserStackNavigator from './userNavigation/UserStackNavigator';
import { useAuth } from '../context/AuthContext';
import ChooseAccount from '../screens/ChooseAccount';
import OnboardingScreen from '../screens/OnboardingScreen';
import { key } from '../utils/key';
import AdminStackNavigator from './adminNavigation/AdminStackNavigator';
import { useColorTheme } from '../context/ThemeContext';
import { StatusBar } from 'react-native';

function AppNavigator() {
  const { isAdmin, onBoardingStatus, chooseAccountStatus } = useAuth();
  const { themeColor, themeType } = useColorTheme();

  console.log('app navigatoru', isAdmin, onBoardingStatus, chooseAccountStatus);
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={
          themeType === key.STORAGE_KEYS.LIGHT
            ? 'dark-content'
            : 'light-content'
        }
      />

      {onBoardingStatus !== true ? (
        <OnboardingScreen />
      ) : chooseAccountStatus !== true ? (
        <ChooseAccount />
      ) : isAdmin === key.STORAGE_KEYS.ADMIN ? (
        <AdminStackNavigator />
      ) : (
        <UserStackNavigator />
      )}
    </NavigationContainer>
  );
}

export default AppNavigator;

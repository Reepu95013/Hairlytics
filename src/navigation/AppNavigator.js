import { NavigationContainer } from '@react-navigation/native';
import UserStackNavigator from './userNavigation/UserStackNavigator';
import { key } from '../utils/key';
import AdminStackNavigator from './adminNavigation/AdminStackNavigator';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

function AppNavigator() {
  const { role } = useSelector(state => state.auth);
  const { themeType} = useSelector(state => state.theme);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={
          themeType === key.STORAGE_KEYS.LIGHT
            ? 'dark-content'
            : 'light-content'
        }
      />

      {role === key.STORAGE_KEYS.ADMIN ? (
        <AdminStackNavigator />
      ) : (
        <UserStackNavigator />
      )}
    </NavigationContainer>
  );
}

export default AppNavigator;

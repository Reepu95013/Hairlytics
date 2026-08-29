import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import AdminDrawerNavigator from './AdminDrawerNavigator';
import AdminLoginScreen from '../../screens/admin/adminAuth/AdminLoginScreen';
import AdminRegisterScreen from '../../screens/admin/adminAuth/AdminRegisterScreen';
import AdminAppointmentViewScreen from '../../screens/admin/adminAppointment/AdminAppointmentViewScreen';
import AdminAddServiceScreen from '../../screens/admin/adminService/AdminAddServiceScreen';
import AdminEditServiceScreen from '../../screens/admin/adminService/AdminEditServiceScreen';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const AdminStackNavigator = () => {
  const { token} = useSelector(state => state.auth);
  return (
    <Stack.Navigator
      initialRouteName={token!=null ? 'AdminDrawer' : 'AdminLoginScreen'}
      screenOptions={{ ...TransitionPresets.ModalFadeTransition }}
    >
      {token !=null ? (
        <>
          <Stack.Screen
            name="AdminDrawer"
            component={AdminDrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminAppointmentViewScreen"
            component={AdminAppointmentViewScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminAddServiceScreen"
            component={AdminAddServiceScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="AdminEditServiceScreen"
            component={AdminEditServiceScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        
        <>
          <Stack.Screen
            name="AdminLoginScreen"
            component={AdminLoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminRegisterScreen"
            component={AdminRegisterScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AdminStackNavigator;

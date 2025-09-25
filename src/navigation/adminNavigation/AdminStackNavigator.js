
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import AdminDrawerNavigator from "./AdminDrawerNavigator";
import AdminLoginScreen from "../../screens/admin/adminAuth/AdminLoginScreen";

const Stack = createStackNavigator();


const AdminStackNavigator = () => {
  const islogin = false;
  return (
    <Stack.Navigator initialRouteName={islogin ? 'AdminDrawer' : 'AdminLoginScreen'} screenOptions={{ ...TransitionPresets.ModalFadeTransition }}>
      <Stack.Screen name="AdminDrawer" component={AdminDrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};

export default AdminStackNavigator;
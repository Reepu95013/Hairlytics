import { NavigationContainer } from "@react-navigation/native";
import AdminTabNavigator from "./adminNavigation/AdminTabNavigator";
import UserStackNavigator from "./userNavigation/UserStackNavigator";


function AppNavigator({ isAdmin }) {
  return (
    <NavigationContainer>
      {isAdmin ==true ? (
        <AdminTabNavigator /> // Wrap in stack if needed
      ) : (
        <UserStackNavigator />
      )}
    </NavigationContainer>
  );
}


export default AppNavigator;
import { NavigationContainer } from "@react-navigation/native";
import AdminTabNavigator from "./adminNavigation/AdminTabNavigator";
import UserStackNavigator from "./userNavigation/UserStackNavigator";
import { useAuth } from "../context/AuthContext";


function AppNavigator() {
   const { isAdmin } = useAuth();
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
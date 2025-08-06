import { NavigationContainer } from "@react-navigation/native";
import AdminTabNavigator from "./adminNavigation/AdminTabNavigator";
import UserStackNavigator from "./userNavigation/UserStackNavigator";
import { useAuth } from "../context/AuthContext";


function AppNavigator() {
  const { isAdmin, onBoardingStatus, chooseAccountStatus } = useAuth();
  return (
    <NavigationContainer>
      {isAdmin == true ? (
        <AdminTabNavigator /> // Wrap in stack if needed
      ) : (
        <UserStackNavigator onBoardingStatus={onBoardingStatus} chooseAccountStatus={chooseAccountStatus} />
      )}
    </NavigationContainer>
  );
}


export default AppNavigator;
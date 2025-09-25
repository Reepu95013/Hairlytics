import { NavigationContainer } from "@react-navigation/native";
import UserStackNavigator from "./userNavigation/UserStackNavigator";
import { useAuth } from "../context/AuthContext";
import ChooseAccount from "../screens/ChooseAccount";
import OnboardingScreen from "../screens/OnboardingScreen";
import { key } from "../utils/key";
import AdminStackNavigator from "./adminNavigation/AdminStackNavigator";


function AppNavigator() {
  const { isAdmin, onBoardingStatus, chooseAccountStatus } = useAuth();

  console.log("app navigatoru", isAdmin, onBoardingStatus, chooseAccountStatus);
  return (
    <NavigationContainer>

      {
        onBoardingStatus !== true ? (
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
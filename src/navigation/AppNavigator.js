import { NavigationContainer } from "@react-navigation/native";
import AdminTabNavigator from "./adminNavigation/AdminTabNavigator";
import UserStackNavigator from "./userNavigation/UserStackNavigator";
import { useAuth } from "../context/AuthContext";
import ChooseAccount from "../screens/ChooseAccount";
import OnboardingScreen from "../screens/OnboardingScreen";


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
        ) : isAdmin === 'admin' ? (
          <AdminTabNavigator />
        ) : (
          <UserStackNavigator/>
        )}
      {/* {isAdmin === 'admin' ? (<AdminTabNavigator />) : (
        <UserStackNavigator onBoardingStatus={onBoardingStatus} chooseAccountStatus={chooseAccountStatus} />
      )

      } */}
    </NavigationContainer>
  );
}


export default AppNavigator;
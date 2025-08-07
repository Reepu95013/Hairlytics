import { createStackNavigator } from "@react-navigation/stack";
import UserDrawerNavigator from "./UserDrawerNavigator";
import OnboardingScreen from "../../screens/OnboardingScreen";
import { StatusBar } from "react-native";
import ChooseAccount from "../../screens/ChooseAccount";
import SearchScreen from "../../screens/user/search/SearchScreen";

const Stack = createStackNavigator();

const UserStackNavigator = ({ onBoardingStatus, chooseAccountStatus }) => {

    return (
        <Stack.Navigator initialRouteName={onBoardingStatus && chooseAccountStatus ? 'Drawer' : onBoardingStatus ? 'ChooseAccount' : 'OnboardingScreen'}>
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ChooseAccount" component={ChooseAccount} options={{ headerShown: false }} />
            <Stack.Screen name="Drawer" component={UserDrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default UserStackNavigator;
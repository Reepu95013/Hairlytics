import { createStackNavigator } from "@react-navigation/stack";
import UserDrawerNavigator from "./UserDrawerNavigator";
import OnboardingScreen from "../../screens/OnboardingScreen";
import { StatusBar } from "react-native";
import ChooseAccount from "../../screens/ChooseAccount";


const Stack = createStackNavigator();

const UserStackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Drawer" component={UserDrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="ChooseAccount" component={ChooseAccount} options={{ headerShown: false }} />

        </Stack.Navigator>


    );
};

export default UserStackNavigator;
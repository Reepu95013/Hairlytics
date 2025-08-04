import { createStackNavigator } from "@react-navigation/stack";
import TestScreen from "../../screens/TestScreen";
import UserDrawerNavigator from "./UserDrawerNavigator";
import OnboardingScreen from "../../screens/OnboardingScreen";
import { StatusBar } from "react-native";


const Stack = createStackNavigator();

const UserStackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Drawer" component={UserDrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="TestScreen" component={TestScreen} options={{ title: 'Test' }} />
        </Stack.Navigator>


    );
};

export default UserStackNavigator;
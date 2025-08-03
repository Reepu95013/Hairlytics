import { createStackNavigator } from "@react-navigation/stack";
import TestScreen from "../../screens/TestScreen";
import UserDrawerNavigator from "./UserDrawerNavigator";


const Stack = createStackNavigator();

const UserStackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Drawer" component={UserDrawerNavigator} options={{headerShown:false}}/>
            <Stack.Screen name="TestScreen" component={TestScreen} options={{title:'Test'}} />
        </Stack.Navigator>
    );
};

export default UserStackNavigator;
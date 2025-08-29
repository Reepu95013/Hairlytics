import { createStackNavigator } from "@react-navigation/stack";
import UserDrawerNavigator from "./UserDrawerNavigator";
import OnboardingScreen from "../../screens/OnboardingScreen";
import { StatusBar } from "react-native";
import ChooseAccount from "../../screens/ChooseAccount";
import SearchScreen from "../../screens/user/search/SearchScreen";
import SalonScreen from "../../screens/user/salon/SalonScreen";
import BookAppointmentScreen from "../../screens/user/bookAppointment/BookAppointmentScreen";
import PaymentSummaryScreen from "../../screens/user/paymentSummary/PaymentSummaryScreen";
import CompleteBookingScreen from "../../screens/user/CompleteBooking/CompleteBookingScreen";
import SearchResultScreen from "../../screens/user/search/SearchResultScreen";

const Stack = createStackNavigator();

const UserStackNavigator = () => {

    // console.log(onBoardingStatus, chooseAccountStatus);

    return (
        <Stack.Navigator initialRouteName={'Drawer'}>
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ChooseAccount" component={ChooseAccount} options={{ headerShown: false }} />
            <Stack.Screen name="Drawer" component={UserDrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SalonScreen" component={SalonScreen} options={{ headerShown: false }} />
            <Stack.Screen name="BookAppointmentScreen" component={BookAppointmentScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PaymentSummaryScreen" component={PaymentSummaryScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CompleteBookingScreen" component={CompleteBookingScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
};

export default UserStackNavigator;
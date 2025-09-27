import { CardStyleInterpolators, createStackNavigator, TransitionPresets } from "@react-navigation/stack";
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
import AppointmentViewScreen from "../../screens/user/appointment/AppointmentViewScreen";
import AboutScreen from "../../screens/user/profile/AboutScreen";
import RatingScreen from "../../screens/user/profile/RatingScreen";
import SendFeedbackScreen from "../../screens/user/profile/SendFeedbackScreen";
import EditProfileSreen from "../../screens/user/profile/EditProfileSreen";
import SignupScreen from "../../screens/user/authentication/SignupScreen";
import LoginScreen from "../../screens/user/authentication/LoginScreen";
import GalleryScreen from "../../screens/user/gallery/GalleryScreen";
import { useLogin } from "../../context/LoginContext";
import { useAuth } from "../../context/AuthContext";

const Stack = createStackNavigator();

const UserStackNavigator = () => {
    const { onBoardingStatus, chooseAccountStatus } = useAuth();
    const { userToken } = useLogin();


    return (
        <Stack.Navigator screenOptions={{ ...TransitionPresets.ModalFadeTransition }}>
            {!onBoardingStatus && <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />}
            {!chooseAccountStatus && <Stack.Screen name="ChooseAccount" component={ChooseAccount} options={{ headerShown: false }} />}

            {
                userToken ? (
                    <>
                        <Stack.Screen name="Drawer" component={UserDrawerNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="SalonScreen" component={SalonScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="BookAppointmentScreen" component={BookAppointmentScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="PaymentSummaryScreen" component={PaymentSummaryScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="CompleteBookingScreen" component={CompleteBookingScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AppointmentViewScreen" component={AppointmentViewScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="RatingScreen" component={RatingScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="SendFeedbackScreen" component={SendFeedbackScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="EditProfileSreen" component={EditProfileSreen} options={{ headerShown: false }} />
                        <Stack.Screen name="GalleryScreen" component={GalleryScreen} options={{ headerShown: false }} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />

                    </>
                )


            }




        </Stack.Navigator >
    );
};

export default UserStackNavigator;
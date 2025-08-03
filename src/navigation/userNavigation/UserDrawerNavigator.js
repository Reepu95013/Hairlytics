import ProfileScreen from "../../screens/user/profile/ProfileScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppointmentScreen from "../../screens/user/appointment/AppointmentScreen";
import HelpScreen from "../../screens/user/help/HelpScreen";
import SettingScreen from "../../screens/user/setting/SettingScreen";
import CustomDrawer from "../../components/CustomDrawer";
import HomeScreen from "../../screens/user/home/HomeScreen";


const Drawer = createDrawerNavigator();



const UserDrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="AppointmentScreen" component={AppointmentScreen} />
      <Drawer.Screen name="HelpScreen" component={HelpScreen} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default UserDrawerNavigator;
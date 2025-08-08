import ProfileScreen from "../../screens/user/profile/ProfileScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppointmentScreen from "../../screens/user/appointment/AppointmentScreen";
import HelpScreen from "../../screens/user/help/HelpScreen";
import SettingScreen from "../../screens/user/setting/SettingScreen";
import CustomDrawer from "../../components/CustomDrawer";
import HomeScreen from "../../screens/user/home/HomeScreen";
import { useTranslation } from "react-i18next";
import WishlistScreen from "../../screens/user/wishlist/WishlistScreen";


const Drawer = createDrawerNavigator();



const UserDrawerNavigator = () => {
  const { t } = useTranslation();
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{ headerShown: false, }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ drawerLabel: t('home') }} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={{ drawerLabel: t('profile') }} />
      <Drawer.Screen name="AppointmentScreen" component={AppointmentScreen} options={{ drawerLabel: t('appointment') }} />
      <Drawer.Screen name="WishlistScreen" component={WishlistScreen} options={{ drawerLabel: t('saved') }} />

      <Drawer.Screen name="HelpScreen" component={HelpScreen} options={{ drawerLabel: t('help') }} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} options={{ drawerLabel: t('setting') }} />

    </Drawer.Navigator>
  );
};

export default UserDrawerNavigator;
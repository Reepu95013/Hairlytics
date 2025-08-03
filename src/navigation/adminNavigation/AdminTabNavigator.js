import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdminStackNavigator from "./AdminStackNavigator";
import AdminProfileScreen from "../../screens/admin/adminProfile/AdminProfileScreen";
import AdminSettingScreen from "../../screens/admin/adminSetting/AdminSettingScreen";

const Tab = createBottomTabNavigator();

const AdminTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AdminDashboard" component={AdminStackNavigator} />
      <Tab.Screen name="AdminProfile" component={AdminProfileScreen} />
      <Tab.Screen name="AdminSetting" component={AdminSettingScreen} />
    </Tab.Navigator>
  );
};

export default AdminTabNavigator;
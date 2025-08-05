import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdminProfileScreen from "../../screens/admin/adminProfile/AdminProfileScreen";
import AdminSettingScreen from "../../screens/admin/adminSetting/AdminSettingScreen";
import AdminDashboardScreen from "../../screens/admin/adminDashboard/AdminDashboardScreen";

const Tab = createBottomTabNavigator();

const AdminTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AdminDashboard" component={AdminDashboardScreen} />
      <Tab.Screen name="AdminProfile" component={AdminProfileScreen} />
      <Tab.Screen name="AdminSetting" component={AdminSettingScreen} />
    </Tab.Navigator>
  );
};

export default AdminTabNavigator;
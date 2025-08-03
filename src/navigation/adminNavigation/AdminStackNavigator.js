
import { createStackNavigator } from "@react-navigation/stack";
import AdminDashboardScreen from "../../screens/admin/adminDashboard/AdminDashboardScreen";

const Stack = createStackNavigator();

const AdminStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashboardMain" component={AdminDashboardScreen} />
      
    </Stack.Navigator>
  );
};

export default AdminStackNavigator;
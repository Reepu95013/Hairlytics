import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import CustomDrawer from '../../components/CustomDrawer';
import AdminSettingScreen from '../../screens/admin/adminSetting/AdminSettingScreen';
import AdminServiceScreen from '../../screens/admin/adminService/AdminServiceScreen';
import AdminAppointmentScreen from '../../screens/admin/adminAppointment/AdminAppointmentScreen';
import AdminReportScreen from '../../screens/admin/adminReport/AdminReportScreen';
import AdminProfileScreen from '../../screens/admin/adminProfile/AdminProfileScreen';
import AdminDashboardScreen from '../../screens/admin/adminDashboard/AdminDashboardScreen';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';
import { useLogin } from '../../context/LoginContext';

const AdminDrawer = createDrawerNavigator();

const AdminDrawerNavigator = () => {
  const { fontFamily, themeColor } = useColorTheme();
  const { t } = useTranslation();

  return (
    <AdminDrawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { fontFamily: fontFamily},
        drawerStyle: { backgroundColor: themeColor.secondaryBackground },
        drawerActiveBackgroundColor: themeColor.primary,
        drawerActiveTintColor: themeColor.primaryText, 
        drawerInactiveTintColor: themeColor.text,
        drawerPosition: 'right',
      }}
    >
      <AdminDrawer.Screen
        name="AdminDashboardScreen"
        component={AdminDashboardScreen}
        options={{ drawerLabel: t('dashboard') }}
      />
      <AdminDrawer.Screen
        name="AdminProfileScreen"
        component={AdminProfileScreen}
        options={{ drawerLabel: t('profle') }}
      />
      <AdminDrawer.Screen
        name="AdminServiceScreen"
        component={AdminServiceScreen}
        options={{ drawerLabel: t('services') }}
      />
      <AdminDrawer.Screen
        name="AdminAppointmentScreen"
        component={AdminAppointmentScreen}
        options={{ drawerLabel: t('appointment') }}
      />
      <AdminDrawer.Screen
        name="AdminReportScreen"
        component={AdminReportScreen}
        options={{ drawerLabel: t('report') }}
      />
      <AdminDrawer.Screen
        name="AdminSettingScreen"
        component={AdminSettingScreen}
        options={{ drawerLabel: t('setting') }}
      />
      <AdminDrawer.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
        options={{ drawerLabel: t('privacy_policy') }}
      />
    </AdminDrawer.Navigator>
  );
};

export default AdminDrawerNavigator;

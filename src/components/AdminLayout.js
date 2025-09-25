import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import CustomAdminBottomTabs from './CustomAdminBottomTabs';


const AdminLayout = ({ children }) => {
    const navigation = useNavigation();
    const { themeColor } = useColorTheme();
    return (
        <SafeAreaView style={{ backgroundColor: themeColor.background, flex: 1, }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ borderColor: themeColor.icon, borderWidth: 1, padding: 5, borderRadius: 10, width: 50, alignItems: 'center', alignSelf: 'flex-end' }}>
                <Icon name='menu' size={32} color={themeColor.iconSecondary} />
            </TouchableOpacity>
            {/* Children Screens */}
            <SafeAreaView style={{ flex: 1}} edges={["left", "right", "bottom"]}>
                {children}
            </SafeAreaView>


            <CustomAdminBottomTabs />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({


});

export default memo(AdminLayout);

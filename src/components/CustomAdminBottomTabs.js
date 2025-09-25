import React, { memo } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useColorTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const CustomAdminBottomTabs = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const route = useRoute();
    const { themeColor, fontFamily } = useColorTheme();

    const tabs = [
        { name: t('dashboard'), screen: 'AdminDashboardScreen', icon: 'dashboard' },
        { name: t('service'), screen: 'AdminServiceScreen', icon: 'receipt-long' },
        { name: t('appointment'), screen: 'AdminAppointmentScreen', icon: 'calendar-month' },
        { name: t('setting'), screen: 'AdminSettingScreen', icon: 'settings' },

    ];

    return (
        <View style={[styles.container, { backgroundColor: themeColor.background, borderTopColor: themeColor.icon }]}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.screen}
                    style={[
                        styles.tabButton,
                        // route.name === tab.screen && { backgroundColor: themeColor.primary },
                    ]}

                    onPress={() => navigation.navigate(tab.screen)}
                >
                    <Icon name={tab.icon} size={24} color={route.name === tab.screen ? themeColor.primary : themeColor.icon} />
                    <Text style={{ color: route.name === tab.screen ? themeColor?.primary : themeColor.icon, fontFamily: fontFamily }}>
                        {tab.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 120,
        borderTopWidth: 1,
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    tabButton: {
        alignItems: 'center',
        padding: 10
    },

});


export default memo(CustomAdminBottomTabs);
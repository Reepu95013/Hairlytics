import React, { memo } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const CustomBottomTabs = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const route = useRoute();
  const { themeColor, fontFamily } = useSelector(state => state.theme);

  const tabs = [
    { name: t('home'), screen: 'HomeScreen', icon: 'home' },
    { name: t('appointment'), screen: 'AppointmentScreen', icon: 'calendar-month' },
    { name: t('saved'), screen: 'WishlistScreen', icon: 'favorite' },
    { name: t('profile'), screen: 'ProfileScreen', icon: 'account-circle' },
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


export default memo(CustomBottomTabs);
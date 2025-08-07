import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useColorTheme } from '../context/ThemeContext';

export default function CustomBottomTabs() {
  const navigation = useNavigation();
  const route = useRoute();
  const { themeColor } = useColorTheme();

  const tabs = [
    { name: 'Home', screen: 'HomeScreen', icon: 'home' },
    { name: 'Appointment', screen: 'AppointmentScreen', icon: 'calendar-month' },
    { name: 'Profile', screen: 'ProfileScreen', icon: 'person' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: themeColor.surface }]}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.screen}
          style={[
            styles.tabButton, { width: 100 },
            route.name === tab.screen && { backgroundColor: themeColor.primary },
          ]}

          onPress={() => navigation.navigate(tab.screen)}
        >
          <Icon name={tab.icon} size={24} color={route.name === tab.screen ? themeColor.primaryText : themeColor.icon} />
          {/* <Text style={route.name === tab.screen ? styles.activeText : styles.text}>
            {tab.name}
          </Text> */}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    borderRadius: 18
  },
  text: {
    color: '#888',
  },
  activeText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

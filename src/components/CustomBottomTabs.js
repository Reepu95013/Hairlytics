import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomBottomTabs() {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: 'Home', screen: 'HomeScreen', icon: 'home' },
    { name: 'Profile', screen: 'ProfileScreen', icon: 'person' },
    { name: 'Setting', screen: 'SettingScreen', icon: 'settings' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.screen}
          style={[
            styles.tabButton,
            route.name === tab.screen && styles.activeTab,
          ]}

          onPress={() => navigation.navigate(tab.screen)}
        >
          <Icon name={tab.icon} size={24} color="red" />
          <Text style={route.name === tab.screen ? styles.activeText : styles.text}>
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
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 16
  },
  tabButton: {
    alignItems: 'center',
  },
  text: {
    color: '#888',
  },
  activeText: {
    color: '#000',
    fontWeight: 'bold',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    backgroundColor: 'green'
  },
});

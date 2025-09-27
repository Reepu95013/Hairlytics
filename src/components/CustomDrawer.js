import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { memo } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useLogin } from '../context/LoginContext';


const CustomDrawer = (props) => {
  const {signOut} = useLogin();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }} // Replace with user image
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john@example.com</Text>
      </View>

      {/* Drawer menu items */}
      <DrawerItemList {...props} />

      <Pressable onPress={signOut} style={{borderWidth:1, padding:14}}>
        <Text>Log-Out</Text>
      </Pressable>

    </DrawerContentScrollView>
  );
}

export default memo(CustomDrawer);


const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 13,
    color: 'gray',
  },
});
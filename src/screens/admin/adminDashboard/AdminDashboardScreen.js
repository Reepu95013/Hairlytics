import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '../../../context/AuthContext';

const AdminDashboardScreen = () => {
   const { switchToAdmin, switchToUser } = useAuth();
  return (
    <View>
      <Button title="Switch to Admin" onPress={switchToAdmin} />
      <Button title="Switch to User" onPress={switchToUser} />
      <Text>AdminDashboardScreen</Text>
    </View>
  )
}

export default AdminDashboardScreen
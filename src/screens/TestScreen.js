import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Screen } from 'react-native-screens'

const TestScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TestScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Drawer', {Screen:'HomeScreen'})}>
        <Text>test Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TestScreen
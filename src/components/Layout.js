import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import CustomBottomTabs from './CustomBottomTabs'

const Layout = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <CustomBottomTabs/>
    </SafeAreaView>
  )
}

export default Layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
  },
});
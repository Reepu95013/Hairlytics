import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import CustomBottomTabs from './CustomBottomTabs'
import { useColorTheme } from '../context/ThemeContext'

const Layout = ({children}) => {
  const {themeColor} = useColorTheme();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor:themeColor.primary}]}>
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